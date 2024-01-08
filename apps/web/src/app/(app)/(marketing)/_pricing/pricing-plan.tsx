import { Button, CheckCircleIcon } from "@palettify/ui";
import { cn } from "@palettify/utils";

interface PlanProps {
  name: string;
  price: string;
  billing?: string;
  description: string;
  href: string;
  features: string[];
  featured?: boolean;
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
  } = props;

  return (
    <section
      className={cn(
        "bg-card relative flex min-h-[530px] flex-col border border-gray-400 px-6 py-16 shadow-2xl sm:px-8 dark:border-gray-800",
        featured && "ring-ring/80 z-10 border-none ring-4",
        className
      )}
    >
      {featured && (
        <div className="bg-ring/80 absolute right-8 top-[-4px] z-[-1] translate-y-[-100%] rounded-t-lg px-4 py-1 text-white shadow-lg">
          Most popular
        </div>
      )}
      <h3 className="mt-5 text-xl font-bold">{name}</h3>
      <p className={cn("mt-2 text-base")}>{description}</p>
      <p className="order-first text-5xl font-light tracking-tight">
        {price}
        {billing && (
          <span className="text-muted-foreground ml-2 text-base font-normal">
            {billing}
          </span>
        )}
      </p>
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
        href={href}
        variant={featured ? "filled" : "outlined"}
        color={featured ? "primary" : "neutral"}
        className="mt-8"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        Get started
      </Button>
    </section>
  );
};
