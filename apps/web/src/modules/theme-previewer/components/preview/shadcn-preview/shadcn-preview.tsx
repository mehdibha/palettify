import React, { Suspense } from "react";
import { DashboardPage } from "./dashboard";
import { DynamicThemeWrapper } from "./dynamic-theme-wrapper";
import { StyledJsxRegistry } from "./registry";

export const ShadcnPreview = () => {
  return (
    <StyledJsxRegistry>
      <DynamicThemeWrapper>
        <DashboardPage />
      </DynamicThemeWrapper>
    </StyledJsxRegistry>
  );
};
