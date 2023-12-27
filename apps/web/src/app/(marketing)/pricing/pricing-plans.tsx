import React from "react";
import { Label, Switch } from "@palettify/ui";
import { cn } from "@palettify/utils";
import { siteConfig } from "@/config";
import { PricingPlan } from "./pricing-plan";

const config = siteConfig.pricingPage;
const pricingPlans = config.pricingPlans;

interface PricingProps {
  billingInterval: "monthly" | "yearly";
  onBillingIntervalChange: (billingInterval: "monthly" | "yearly") => void;
}

export const PricingPlans = (props: PricingProps) => {
  const { billingInterval, onBillingIntervalChange } = props;
  const monthly = billingInterval === "monthly";

  return (
    <section>
      <div className="md:text-center">
        <h2 className="font-display text-5xl">{config.headline}</h2>
        <p className="text-muted-foreground mt-2 text-lg">{config.subheadline}</p>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <Label htmlFor="subscription" className="text-xl">
            Monthly
          </Label>
          <Switch
            checked={!monthly}
            onCheckedChange={(checked) =>
              onBillingIntervalChange(checked ? "yearly" : "monthly")
            }
            id="subscription"
          />
          <Label htmlFor="subscription" className="text-xl">
            Yearly
          </Label>
        </div>
      </div>
      <div
        className={cn("mt-16 grid grid-cols-3 items-center", {
          "mx-auto max-w-3xl grid-cols-2": pricingPlans.length === 2,
        })}
      >
        {pricingPlans.map((plan, index) => (
          <PricingPlan
            key={plan.name}
            name={plan.name}
            price={plan.price[monthly ? "monthly" : "yearly"]}
            billing={plan.billing}
            description={plan.description}
            href={plan.href}
            features={plan.features}
            featured={plan.featured}
            className={
              index === 0
                ? "rounded-l-3xl"
                : index === 1
                  ? "rounded-3xl"
                  : index === 2
                    ? "rounded-r-3xl"
                    : "rounded-3xl"
            }
          />
        ))}
      </div>
    </section>
  );
};
