import { headers } from "next/headers";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import {
  addUserInvoice,
  manageSubscriptionStatusChange,
  upsertPriceRecord,
  upsertProductRecord,
} from "@/modules/payment/services";

const relevantEvents = new Set([
  "product.created",
  "product.updated",
  "price.created",
  "price.updated",
  "checkout.session.completed",
  "customer.subscription.created",
  "customer.subscription.updated",
  "customer.subscription.deleted",
  "invoice.payment_failed",
  "invoice.payment_succeeded",
]);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;

  try {
    if (!signature) {
      throw new Error("Webhook signature verification failed.");
    }
    if (!webhookSecret) {
      throw new Error("STRIPE_WEBHOOK_SECRET is not set");
    }
    event = event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error: any) {
    console.log(`❌ Error message: ${error.message}`);
    return new Response(`Webhook Error: ${error.message}`, { status: 400 });
  }
  console.log("EVENT TYPE", event.type);
  try {
    switch (event.type) {
      case "product.created":
      case "product.updated":
        await upsertProductRecord(event.data.object as Stripe.Product);
        break;
      case "price.created":
      case "price.updated":
        await upsertPriceRecord(event.data.object as Stripe.Price);
        break;
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        const subscription = event.data.object as Stripe.Subscription;
        await manageSubscriptionStatusChange(
          subscription.metadata.siteId as string,
          subscription.id,
          subscription.customer as string,
          event.type === "customer.subscription.created"
        );
        break;
      case "checkout.session.completed":
        const checkoutSession = event.data.object as Stripe.Checkout.Session;
        if (checkoutSession.mode === "subscription") {
          const subscriptionId = checkoutSession.subscription;
          await manageSubscriptionStatusChange(
            checkoutSession.metadata?.siteId as string,
            subscriptionId as string,
            checkoutSession.customer as string,
            true
          );
        }
        break;
      case "invoice.payment_failed":
      case "invoice.payment_succeeded":
        const invoice = event.data.object as Stripe.Invoice;
        await addUserInvoice(invoice);
        break;
      default:
        console.log(`Unhandled relevant event!: ${event.type}`);
        return new Response(null, { status: 200 });
    }
    return new Response(null, { status: 200 });
  } catch (error) {
    console.log(`ERROR on event!: ${event.type}`);
    console.log(error);
    return new Response("Webhook handler failed. View your nextjs function logs.", {
      status: 400,
    });
  }
}
