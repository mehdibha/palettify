import React, { ReactNode } from "react";
import { getThemeById } from "@/modules/themes/services";
import { FormProvider } from "./form-provider";
import { Preview } from "./preview";

interface DashboardLayoutProps {
  params: { themeId: string };
  children: ReactNode;
}

export default async function DashboardLayout(props: DashboardLayoutProps) {
  const { params, children } = props;
  const { themeId } = params;
  const theme = await getThemeById(themeId);

  return (
    <FormProvider theme={theme}>
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
