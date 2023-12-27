"use server";

import { prisma } from "@palettify/database";
import { stripe } from "@/lib/stripe";
import { getSession } from "@/modules/auth/services";
import { absoluteUrl } from "@/utils";
import { createOrRetrieveCustomer } from "./services";

export async function createCheckoutSession(priceId: string, siteId: string) {
  // try {
  //   const session = await getSession();
  //   if (!session?.user || !session?.user.email) {
  //     throw new Error("Unauthorized");
  //   }
  //   const customerId = await createOrRetrieveCustomer({
  //     userId: session.user.id,
  //     email: session.user.email,
  //   });
  //   if (!customerId) throw Error("Could not get or create customer");
  //   const userSubscription = await prisma.subscription.findUnique({
  //     where: {
  //       userId: session.user.id,
  //       siteId,
  //     },
  //   });
  //   if (userSubscription) {
  //     const stripeSession = await stripe.billingPortal.sessions.create({
  //       customer: customerId,
  //       return_url: absoluteUrl(`/site/${siteId}`),
  //     });
  //     return {
  //       success: true,
  //       redirectUrl: stripeSession.url as string,
  //     };
  //   }
  //   const stripeSession = await stripe.checkout.sessions.create({
  //     success_url: absoluteUrl(`/site/${siteId}`),
  //     cancel_url: absoluteUrl(`/site/${siteId}`),
  //     payment_method_types: ["card"],
  //     mode: "subscription",
  //     customer: customerId,
  //     billing_address_collection: "auto",
  //     line_items: [
  //       {
  //         price: priceId,
  //         quantity: 1,
  //       },
  //     ],
  //     metadata: {
  //       userId: session.user.id,
  //       siteId,
  //     },
  //   });
  //   return {
  //     success: true,
  //     redirectUrl: stripeSession.url as string,
  //   };
  // } catch (error: any) {
  //   return {
  //     error: error.message,
  //   };
  // }
}
