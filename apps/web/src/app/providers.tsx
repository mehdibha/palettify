"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "@palettify/ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light">
      <Toaster />
      {children}
    </ThemeProvider>
  );
}
