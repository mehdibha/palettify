import React from "react";
import { Dashboard } from "./dashboard";
import { DynamicThemeWrapper } from "./dynamic-theme-wrapper";
import { Landing } from "./landing";
import { StyledJsxRegistry } from "./registry";

export const ShadcnPreview = ({
  view,
  mobileView,
}: {
  view: "landing" | "dashboard";
  mobileView?: boolean;
}) => {
  return (
    <StyledJsxRegistry>
      <DynamicThemeWrapper>
        {view === "dashboard" && <Dashboard mobileView={mobileView} />}
        {view === "landing" && <Landing />}
      </DynamicThemeWrapper>
    </StyledJsxRegistry>
  );
};
