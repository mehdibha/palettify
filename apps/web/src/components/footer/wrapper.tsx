"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  if (pathname === "/playground") {
    return null;
  } else return children;
};
0;
