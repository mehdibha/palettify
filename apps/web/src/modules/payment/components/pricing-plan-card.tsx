import React, { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Badge, Button, CheckCircleIcon, useToast } from "@palettify/ui";
import { cn } from "@palettify/utils";
import { createCheckoutSession } from "../actions";

interface PlanProps {
  name: string;
  price: string;
  billing?: string;
  description?: string | null;
  href?: string;
  features: string[];
  featured?: boolean;
  priceId: string;
  siteId: string;
  disabled?: boolean;
  className: string;
}

export const PricingPlan = (props: PlanProps) => {
  const {
    name,
    price,
    billing,
    description,
    href,
    features,
    featured = false,
    className,
    priceId,
    siteId,
    disabled = false,
  } = props;

  const router = useRouter();
  const { toast } = useToast();
  let [isPending, startTransition] = useTransition();

  function handleSubmit() {
    startTransition(async () => {
      // const result = await createCheckoutSession(priceId, siteId);
      // if (result?.error) {
      //   toast({ title: result?.error, variant: "destructive" });
      // }
      // if (result.success) {
      //   router.push(result.redirectUrl);
      // }
    });
  }

  return (
    <section
      className={cn(
        "bg-card relative flex flex-col border border-gray-400 p-6 shadow-2xl sm:px-8 dark:border-gray-800",
        featured && "ring-ring/80 z-10 border-none ring-4",
        disabled && "text-muted-foreground",
        className
      )}
    >
      {featured && (
        <div className="bg-ring/80 absolute right-8 top-[-4px] z-[-1] translate-y-[-100%] rounded-t-lg px-4 py-1 text-white shadow-lg dark:text-black">
          Most popular
        </div>
      )}
      <div className="flex items-start justify-between">
        <p className="flex items-end text-5xl font-light tracking-tight">
          <span>{price}</span>
          <span className="text-muted-foreground ml-2 flex flex-col text-xs font-normal leading-4 tracking-wide">
            <span className="">/month</span>
            {billing && <span className="">{billing}</span>}
          </span>
        </p>
        {disabled && (
          <Badge color="secondary" className="opacity-80">
            Coming soon
          </Badge>
        )}
      </div>
      <h3 className="mt-5 text-xl font-bold">{name}</h3>
      {description && <p className={cn("mt-2 text-base")}>{description}</p>}
      <ul
        role="list"
        className={cn("order-last mt-10 flex min-h-[100px] flex-col gap-y-3 text-sm", {
          "min-h-[220px]": featured,
        })}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckCircleIcon />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        disabled={disabled}
        loading={isPending}
        onClick={() => {
          handleSubmit();
        }}
        href={href}
        variant={"filled"}
        color={featured ? "primary" : "neutral"}
        className="mt-8"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        Upgrade now
      </Button>
    </section>
  );
};
