import Stripe from "stripe";
import { prisma } from "@palettify/database";
import { stripe } from "@/lib/stripe";
import { getUser } from "@/modules/auth/services";

export const getUserSubscriptions = async () => {
  // const user = await getUser();
  // const sites = await prisma.site.findMany({
  //   where: {
  //     userId: user.id,
  //   },
  //   include: {
  //     subscription: {
  //       include: {
  //         price: {
  //           include: {
  //             product: true,
  //           },
  //         },
  //       },
  //     },
  //   },
  // });
  // const subscriptions = sites.map((site) => ({
  //   id: site.id,
  //   siteName: site.name,
  //   isLive: site.isLive,
  //   href: site.subdomain,
  //   plan: {
  //     name: site.subscription?.price.product.name ?? "Free site",
  //   },
  // }));
  // return subscriptions;
  return [];
};

export const getUserInvoices = async () => {
  const user = await getUser();
  const invoices = await prisma.invoice.findMany({
    where: {
      userId: user.id,
    },
  });
  return invoices;
};

export const upsertProductRecord = async (product: Stripe.Product) => {
  const productsFields = {
    active: product.active,
    name: product.name,
    description: product.description ?? null,
    image: product.images?.[0] ?? null,
    metadata: product.metadata,
    features: product.features.map((feature) => feature.name) as string[],
  };
  try {
    await prisma.product.upsert({
      where: {
        stripeProductId: product.id,
      },
      update: {
        ...productsFields,
      },
      create: {
        stripeProductId: product.id,
        ...productsFields,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const upsertPriceRecord = async (price: Stripe.Price) => {
  const priceFields = {
    active: price.active,
    currency: price.currency,
    description: price.nickname ?? null,
    type: price.type,
    unitAmount: price.unit_amount ?? null,
    interval: price.recurring?.interval ?? null,
    intervalCount: price.recurring?.interval_count ?? null,
    trialPeriodDays: price.recurring?.trial_period_days ?? null,
    metadata: price.metadata,
  };

  if (typeof price.product !== "string") {
    throw new Error("Missing product in price object");
  }

  try {
    await prisma.price.upsert({
      where: {
        stripePriceId: price.id,
      },
      update: {
        product: {
          connect: {
            stripeProductId: typeof price.product === "string" ? price.product : "",
          },
        },
        ...priceFields,
      },
      create: {
        stripePriceId: price.id,
        product: {
          connect: {
            stripeProductId: typeof price.product === "string" ? price.product : "",
          },
        },
        ...priceFields,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const createOrRetrieveCustomer = async ({
  email,
  userId,
}: {
  email: string;
  userId: string;
}) => {
  try {
    const customer = await prisma.customer.findUnique({
      where: {
        userId,
      },
    });

    if (!customer) {
      const stripeCustomer = await stripe.customers.create({
        email,
        metadata: {
          userId,
        },
      });
      await prisma.customer.create({
        data: {
          stripeCustomerId: stripeCustomer.id,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      return stripeCustomer.id;
    }

    return customer.stripeCustomerId;
  } catch (error) {
    throw error;
  }
};

export const copyBillingDetailsToCustomer = async (
  userId: string,
  payment_method: Stripe.PaymentMethod
) => {
  const { name, phone, address } = payment_method.billing_details;
  if (!name || !phone || !address) return;
  try {
    await prisma.customer.update({
      where: {
        userId,
      },
      data: {
        billingAddress: { ...address },
        // @ts-ignore TODO: fix this
        paymentMethod: { ...payment_method[payment_method.type] },
      },
    });
  } catch (error) {
    throw error;
  }
};

export const manageSubscriptionStatusChange = async (
  siteId: string | undefined,
  stripeSubscriptionId: string,
  stripeCustomerId: string,
  createAction = false
) => {
  try {
    const customer = await prisma.customer.findUnique({
      where: {
        stripeCustomerId,
      },
    });
    if (!customer) throw new Error("Customer not found");

    const stripeSubscription = await stripe.subscriptions.retrieve(stripeSubscriptionId, {
      expand: ["default_payment_method"],
    });

    let subscriptionFields: any = {
      status: stripeSubscription.status,
      cancelAtPeriodEnd: stripeSubscription.cancel_at_period_end,
      cancelAt: stripeSubscription.cancel_at
        ? new Date(stripeSubscription.cancel_at * 1000)
        : null,
      canceledAt: stripeSubscription.canceled_at
        ? new Date(stripeSubscription.canceled_at * 1000)
        : null,
      currentPeriodStart: new Date(stripeSubscription.current_period_start * 1000),
      currentPeriodEnd: new Date(stripeSubscription.current_period_end * 1000),
      created: new Date(stripeSubscription.created * 1000),
      endedAt: stripeSubscription.ended_at
        ? new Date(stripeSubscription.ended_at * 1000)
        : null,
      trialStart: stripeSubscription.trial_start
        ? new Date(stripeSubscription.trial_start * 1000)
        : null,
      trialEnd: stripeSubscription.trial_end
        ? new Date(stripeSubscription.trial_end * 1000)
        : null,
    };

    if (siteId) {
      subscriptionFields = {
        ...subscriptionFields,
        site: {
          connect: {
            id: siteId,
          },
        },
      };
    }

    if (stripeSubscription.items.data[0].price.id) {
      subscriptionFields = {
        ...subscriptionFields,
        price: {
          connect: {
            stripePriceId: stripeSubscription.items.data[0].price.id,
          },
        },
      };
    }

    await prisma.subscription.upsert({
      where: {
        stripeSubscriptionId,
      },
      update: subscriptionFields,
      create: {
        stripeSubscriptionId,
        ...subscriptionFields,
        user: {
          connect: {
            id: customer.userId,
          },
        },
      },
    });

    if (createAction && stripeSubscription.default_payment_method && customer.userId)
      //@ts-ignore
      await copyBillingDetailsToCustomer(
        customer.userId,
        stripeSubscription.default_payment_method as Stripe.PaymentMethod
      );
  } catch (error) {
    throw error;
  }
};

export const addUserInvoice = async (invoice: Stripe.Invoice) => {
  try {
    if (!invoice.customer) throw new Error("Customer not found");

    const customer = await prisma.customer.findUnique({
      where: {
        stripeCustomerId: invoice.customer as string,
      },
    });

    if (!customer?.userId) {
      throw new Error("Customer not found");
    }

    let invoiceFields: any = {
      stripeInvoiceId: invoice.id,
      amount: invoice.amount_due,
      status: invoice.status ?? undefined,
      user: {
        connect: {
          id: customer.userId,
        },
      },
    };

    if (invoice.subscription) {
      invoiceFields = {
        ...invoiceFields,
        subscription: {
          connect: {
            stripeSubscriptionId: invoice.subscription,
          },
        },
      };
    }

    if (invoice.lines.data[0].price?.id) {
      invoiceFields = {
        ...invoiceFields,
        price: {
          connect: {
            stripePriceId: invoice.lines.data[0].price?.id,
          },
        },
      };
    }

    await prisma.invoice.upsert({
      where: {
        stripeInvoiceId: invoice.id,
      },
      update: {
        ...invoiceFields,
      },
      create: {
        ...invoiceFields,
      },
    });
  } catch (error) {
    throw error;
  }
};
