import React from "react";
import { ThemeForm } from "@/modules/theme-previewer/components/theme-form";
import { getThemeById } from "@/modules/themes/services";
import { FormProvider } from "../../../../modules/theme-previewer/components/form-provider";
import { Preview } from "../../../../modules/theme-previewer/components/preview/preview";

interface PlaygroundPageProps {
  params: { themeId: string };
}

export default async function PlaygroundPage(props: PlaygroundPageProps) {
  const { params } = props;
  const { themeId } = params;
  const theme = await getThemeById(themeId, { palettes: true });

  if (!theme) {
    throw new Error("Theme not found");
  }

  return (
    <FormProvider theme={theme}>
      <div className="min-h-screen">
        <div className="lg:w-[460px]">
          <div className="sm:container sm:px-8">
            <div className="bg-card animate-in fade-in slide-in-from-top-1 rounded-xl p-4 shadow-xl duration-150">
              <ThemeForm theme={theme} />
            </div>
          </div>
        </div>
        <Preview />
      </div>
    </FormProvider>
  );
}
