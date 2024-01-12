import React from "react";
import { ShadcnPreview } from "./shadcn-preview";

interface PreviewProps {
  library: "shadcn" | "mui" | "antd" | "tailwind" | "chakra";
  view: "landing" | "dashboard";
  mobileView?: boolean;
}

export const LibraryPreview = (props: PreviewProps) => {
  const { library, view, mobileView } = props;

  if (library === "shadcn") {
    return <ShadcnPreview view={view} mobileView={mobileView} />;
  }

  return null;
};
