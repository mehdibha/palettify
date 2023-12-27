import React from "react";
import { cn } from "@palettify/utils";

interface AppPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  cta?: React.ReactNode;
  className?: string;
  container?: boolean;
  containerClassName?: string;
}

export const AppPageLayout = (props: AppPageLayoutProps) => {
  const { title, subtitle, children, cta, container, containerClassName, className } =
    props;
  return (
    <div
      className={cn(
        "pb-16",
        {
          "container max-w-5xl": container,
        },
        containerClassName
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-muted-foreground mt-2">{subtitle}</p>
        </div>
        {cta}
      </div>
      <div className={cn("mt-8", className)}>{children}</div>
    </div>
  );
};
