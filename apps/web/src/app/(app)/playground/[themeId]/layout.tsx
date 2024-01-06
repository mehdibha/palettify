"use client";

import React, { ReactNode } from "react";
import { FormProvider } from "./form-provider";
import { Preview } from "./preview";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <FormProvider>
      <div className="min-h-screen">
        <div className="lg:w-[460px]">
          <div className="container px-8">
            <div className="bg-background animate-in fade-in slide-in-from-top-1 rounded-xl p-4 shadow-xl duration-150">
              {children}
            </div>
          </div>
        </div>
        <Preview className="animate-in fade-in slide-in-from-top-1 duration-150" />
      </div>
    </FormProvider>
  );
}
