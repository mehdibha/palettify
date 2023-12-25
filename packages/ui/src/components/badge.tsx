import * as React from "react";
import type { VariantProps } from "@palettify/utils";
import { cn, cva } from "@palettify/utils";

const badgeVariants = cva("flex items-center rounded-full text-xs font-medium border", {
  variants: {
    color: {
      default: "border-gray-400/30 bg-gray-400/30 text-foreground",
      primary: "border-primary bg-primary text-primary-foreground",
      secondary: "border-secondary bg-secondary text-secondary-foreground",
    },
    variant: {
      filled: "border-transparent",
      outlined: "bg-transparent",
    },
    size: {
      sm: "px-2 py-[1px]",
      md: "px-3 py-1",
    },
  },
  defaultVariants: {
    variant: "filled",
    color: "default",
    size: "md",
  },
});

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof badgeVariants> {
  selected?: boolean;
}

function Badge(props: BadgeProps) {
  const { className, variant, selected, color, size, ...restProps } = props;
  return (
    <div
      className={cn(badgeVariants({ color, variant, size }), className)}
      {...restProps}
    />
  );
}

export { Badge, badgeVariants };
