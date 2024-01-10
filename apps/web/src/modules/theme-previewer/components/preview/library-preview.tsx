import React from "react";
import { ShadcnPreview } from "./shadcn-preview";

interface PreviewProps {
  library: "shadcn" | "mui" | "antd" | "tailwind" | "chakra";
}

export const LibraryPreview = (props: PreviewProps) => {
  const { library } = props;

  if (library === "shadcn") {
    return <ShadcnPreview />;
  }

  return null;
};
