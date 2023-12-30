import { ReactNode } from "react";
import { FormProvider } from "./form-provider";
import { Preview } from "./preview";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;

  return (
    <FormProvider>
      <div className="min-h-screen">
        <div className="lg:w-[500px]">
          <div className="container px-8">
            <div className="bg-card rounded-xl border p-4 shadow-xl">{children}</div>
          </div>
        </div>
        <Preview />
      </div>
    </FormProvider>
  );
}
