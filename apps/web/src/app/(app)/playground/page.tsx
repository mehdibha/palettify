import React from "react";
import { FormProvider } from "@/modules/theme-previewer/components/form-provider";
import { ThemeForm } from "@/modules/theme-previewer/components/theme-form";
import { Preview } from "../../../modules/theme-previewer/components/preview/preview";

export default function PlaygroundPage() {
  return (
    <FormProvider>
      <div className="min-h-screen">
        <div className="lg:w-[460px]">
          <div className="container px-8">
            <div className="bg-card animate-in fade-in slide-in-from-top-1 rounded-xl p-4 shadow-xl duration-150">
              <ThemeForm />
            </div>
          </div>
        </div>
        <Preview />
      </div>
    </FormProvider>
  );
}
