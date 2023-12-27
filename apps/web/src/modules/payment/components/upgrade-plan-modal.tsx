"use client";

import React from "react";
import { Price, Product } from "@palettify/database";
import { Dialog, DialogContent, DialogTrigger, Label, Switch } from "@palettify/ui";
import { cn } from "@palettify/utils";
import { PricingPlan } from "./pricing-plan-card";

type Plan = Product & { price: Price[] };
interface UpgradePlanModalProps {
  plans: Plan[];
  currentPlan: Plan;
  siteId: string;
  children: React.ReactNode;
}

export const UpgradePlanModal = (props: UpgradePlanModalProps) => {
  const { plans, currentPlan, siteId, children } = props;

  const [billingInterval, setBillingInterval] = React.useState<"month" | "year">("month");
  const [open, setOpen] = React.useState(false);

  const formattedPlans = React.useMemo(() => {
    return plans
      .filter((plan) => {
        if (
          typeof plan.price[0].unitAmount === "number" &&
          typeof currentPlan.price[0].unitAmount === "number"
        ) {
          return plan.price[0].unitAmount > currentPlan.price[0].unitAmount;
        } else {
          return false;
        }
      })
      .sort((planA, planB) => {
        const priceA = planA.price.find((price) => price.interval === billingInterval);
        const priceB = planB.price.find((price) => price.interval === billingInterval);
        if (priceA?.unitAmount && priceB?.unitAmount) {
          return priceA.unitAmount - priceB.unitAmount;
        }
        return 0;
      });
  }, [plans, currentPlan, billingInterval]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={cn("max-w-3xl", {
          "max-w-lg": formattedPlans.length === 1,
        })}
      >
        <div>
          <h2 className="text-center text-2xl font-bold">Upgrade your site</h2>
          <div className="mt-6 flex items-center justify-center space-x-4">
            <Label htmlFor="subscription">Monthly</Label>
            <Switch
              checked={billingInterval === "year"}
              onCheckedChange={(checked) =>
                setBillingInterval(checked ? "year" : "month")
              }
              id="subscription"
            />
            <Label htmlFor="subscription">Yearly</Label>
          </div>
          <div
            className={cn("mt-8 grid grid-cols-2 gap-6", {
              "mx-auto max-w-xs grid-cols-1": formattedPlans.length === 1,
            })}
          >
            {formattedPlans.map((plan) => {
              const price = plan.price.find(
                (price) => price.interval === billingInterval
              );
              if (!price) return null;
              return (
                <PricingPlan
                  key={plan.name}
                  name={plan.name}
                  price={`${
                    billingInterval === "month"
                      ? (price.unitAmount || 0) / 100
                      : (price.unitAmount || 0) / 1200
                  }$`}
                  billing={
                    billingInterval === "year" ? "billed yearly" : "billed monthly"
                  }
                  description={plan.description}
                  features={plan.features}
                  siteId={siteId}
                  priceId={price.stripePriceId}
                  disabled={
                    // @ts-ignore
                    plan.metadata?.disabled === "true"
                  }
                  className={"rounded-xl"}
                />
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
