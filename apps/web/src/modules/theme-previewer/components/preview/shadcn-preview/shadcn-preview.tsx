import React, { Suspense } from "react";
import { DashboardPage } from "./dashboard";
import { DynamicThemeWrapper } from "./dynamic-theme-wrapper";
import { StyledJsxRegistry } from "./registry";

export const ShadcnPreview = ({ mobileView }: { mobileView?: boolean }) => {
  return (
    <StyledJsxRegistry>
      <DynamicThemeWrapper>
        <DashboardPage mobileView={mobileView} />
      </DynamicThemeWrapper>
    </StyledJsxRegistry>
  );
};
