"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useFormContext } from "react-hook-form";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

export function DynamicThemeWrapper(props: ThemeWrapperProps) {
  const { children } = props;

  const form = useFormContext();

  const mode = useTheme().resolvedTheme;
  const darkTheme = form.watch("darkTheme");
  const lightTheme = form.watch("lightTheme");
  const resolvedTheme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <div className="preview-mode">
      <style jsx global>{`
        .preview-mode {
          --background: ${resolvedTheme.background};
          --foreground: ${resolvedTheme.foreground};
          --card: ${resolvedTheme.card};
          --card-foreground: ${resolvedTheme.cardForeground};
          --popover: ${resolvedTheme.popover};
          --popover-foreground: ${resolvedTheme.popoverForeground};
          --primary: ${resolvedTheme.primary};
          --primary-foreground: ${resolvedTheme.primaryForeground};
          --secondary: ${resolvedTheme.secondary};
          --secondary-foreground: ${resolvedTheme.secondaryForeground};
          --muted: ${resolvedTheme.muted};
          --muted-foreground: ${resolvedTheme.mutedForeground};
          --accent: ${resolvedTheme.accent};
          --accent-foreground: ${resolvedTheme.accentForeground};
          --destructive: ${resolvedTheme.destructive};
          --destructive-foreground: ${resolvedTheme.destructiveForeground};
          --success: ${resolvedTheme.success};
          --success-foreground: ${resolvedTheme.successForeground};
          --border: ${resolvedTheme.border};
          --input: ${resolvedTheme.input};
          --ring: ${resolvedTheme.ring};
        }
        .preview-mode.dark {
          --background: ${resolvedTheme.background};
          --foreground: ${resolvedTheme.foreground};
          --card: ${resolvedTheme.card};
          --card-foreground: ${resolvedTheme.cardForeground};
          --popover: ${resolvedTheme.popover};
          --popover-foreground: ${resolvedTheme.popoverForeground};
          --primary: ${resolvedTheme.primary};
          --primary-foreground: ${resolvedTheme.primaryForeground};
          --secondary: ${resolvedTheme.secondary};
          --secondary-foreground: ${resolvedTheme.secondaryForeground};
          --muted: ${resolvedTheme.muted};
          --muted-foreground: ${resolvedTheme.mutedForeground};
          --accent: ${resolvedTheme.accent};
          --accent-foreground: ${resolvedTheme.accentForeground};
          --destructive: ${resolvedTheme.destructive};
          --destructive-foreground: ${resolvedTheme.destructiveForeground};
          --success: ${resolvedTheme.success};
          --success-foreground: ${resolvedTheme.successForeground};
          --border: ${resolvedTheme.border};
          --input: ${resolvedTheme.input};
          --ring: ${resolvedTheme.ring};
        }
      `}</style>
      <div className="text-foreground bg-background">{children}</div>
    </div>
  );
}
