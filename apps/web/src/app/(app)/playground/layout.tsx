"use client";

import { ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { FormProvider } from "./form-provider";
import { Preview } from "./preview";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;
  useSearchParams();

  return (
    <FormProvider>
      <div className="min-h-screen">
        <div className="lg:w-[500px]">
          <div className="container px-8">
            <div className="bg-background rounded-xl p-4 shadow-xl">{children}</div>
          </div>
        </div>
        <Preview />
      </div>
    </FormProvider>
  );
}
