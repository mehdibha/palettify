import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import type { LucideIcon } from "lucide-react";
import { cn, type VariantProps, cva } from "@palettify/utils";
import { LoadingDots } from "./loading-dots";

const buttonVariants = cva(
  "inline-flex text-center items-center justify-center rounded-lg min-w-[100px] min-h-[0px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        text: "",
        outlined: "border",
        filled: "shadow-sm hover:shadow transition-all",
      },
      size: {
        sm: "px-4 py-1 rounded-full min-h-[28px]",
        md: "px-4 py-2 min-h-[36px]",
        lg: "px-8 py-3 min-h-[50px]",
        icon: "h-10 w-10 min-w-0",
        "icon-sm": "h-7 w-7 min-w-0",
      },
      color: {
        primary: "",
        secondary: "",
        neutral: "",
        destructive: "",
      },
    },
    compoundVariants: [
      {
        variant: "filled",
        color: "primary",
        className: "bg-primary text-primary-foreground hover:bg-primary/80",
      },
      {
        variant: "filled",
        color: "secondary",
        className: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      {
        variant: "filled",
        color: "neutral",
        className: "bg-accent text-accent-foreground hover:bg-accent/60",
      },
      {
        variant: "filled",
        color: "destructive",
        className: "bg-destructive text-destructive-foreground hover:bg-destructive/60",
      },
      {
        variant: "outlined",
        color: "primary",
        className:
          "border-primary/40 hover:bg-primary/10 hover:border-primary text-primary",
      },
      {
        variant: "outlined",
        color: "secondary",
        className:
          "border-secondary/40 hover:bg-secondary/10 hover:border-secondary text-secondary",
      },
      {
        variant: "outlined",
        color: "neutral",
        className:
          "border-accent-foreground/40 hover:bg-accent hover:border-accent-foreground text-accent-foreground",
      },
      {
        variant: "text",
        color: "primary",
        className: "hover:bg-primary/10 text-primary",
      },
      {
        variant: "text",
        color: "secondary",
        className: "hover:bg-secondary/10 text-secondary",
      },
      {
        variant: "text",
        color: "neutral",
        className: "hover:bg-accent/50 hover:text-accent-foreground",
      },
    ],
    defaultVariants: {
      variant: "filled",
      size: "md",
      color: "neutral",
    },
  }
);

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: LucideIcon;
  loading?: boolean;
  type?: "submit" | "button" | "reset";
  target?: "_blank" | "_self" | "_parent" | "_top" | "framename";
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    variant = "filled",
    disabled,
    size,
    color,
    href,
    asChild = false,
    target,
    fullWidth = false,
    icon,
    loading,
    ...restProps
  } = props;

  const classes = cn(buttonVariants({ variant, size, color, className }), {
    "w-full": fullWidth,
    "bg-gray-500 text-gray-100": disabled && variant === "filled",
  });
  const Icon = icon;

  if (href && !disabled) {
    return (
      <Link href={href} target={target} className={classes}>
        {loading ? (
          <LoadingDots />
        ) : (
          <>
            {Icon && <Icon size={20} className="mr-2" />}
            {props.children}
          </>
        )}
      </Link>
    );
  }

  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={classes} disabled={disabled} ref={ref} {...restProps}>
      {loading ? (
        <LoadingDots />
      ) : (
        <>
          {Icon ? <Icon className="mr-2" size={20} /> : null}
          {children}
        </>
      )}
    </Comp>
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
