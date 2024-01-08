"use client";

import React from "react";
import { PricingPlans } from "./pricing-plans";

export const Pricing = () => {
  const [billingInterval, setBillingInterval] = React.useState<"monthly" | "yearly">(
    "monthly"
  );
  const handleBillingIntervalChange = (billingInterval: "monthly" | "yearly") => {
    setBillingInterval(billingInterval);
  };
  return (
    <PricingPlans
      billingInterval={billingInterval}
      onBillingIntervalChange={handleBillingIntervalChange}
    />
  );
};
