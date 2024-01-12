import React from "react";
import { ShadcnPreview } from "./shadcn-preview";

interface PreviewProps {
  library: "shadcn" | "mui" | "antd" | "tailwind" | "chakra";
  mobileView?: boolean;
}

export const LibraryPreview = (props: PreviewProps) => {
  const { library, mobileView } = props;

  if (library === "shadcn") {
    return <ShadcnPreview mobileView={mobileView} />;
  }

  return null;
};
