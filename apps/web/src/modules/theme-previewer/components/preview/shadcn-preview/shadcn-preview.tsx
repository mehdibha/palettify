import React from "react";
import { DashboardPage } from "./dashboard";
import { StyledJsxRegistry } from "./registry";

// import { DynamicThemeWrapper } from "./dynamic-theme-wrapper";

export const ShadcnPreview = () => {
  return (
    <StyledJsxRegistry>
      <DashboardPage />
    </StyledJsxRegistry>
  );
};
