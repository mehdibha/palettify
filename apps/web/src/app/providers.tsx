"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "@palettify/ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Toaster />
      {children}
    </ThemeProvider>
  );
}
