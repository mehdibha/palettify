"use client";

import React from "react";
import Color from "color";
import { useTheme } from "next-themes";
import { useFormContext } from "react-hook-form";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

export function DynamicThemeWrapper(props: ThemeWrapperProps) {
  const { children } = props;

  const form = useFormContext();

  const { theme } = useTheme();
  const darkTheme = form.watch("darkTheme");
  const lightTheme = form.watch("lightTheme");
  const resolvedTheme = theme === "dark" ? darkTheme : lightTheme;

  const formatColor = React.useMemo(
    () => (color: string) => {
      const parsedColor = Color(color).hsl().color;
      return `${parseFloat(parsedColor[0].toFixed(2))} ${parseFloat(
        parsedColor[1].toFixed(2)
      )}% ${parseFloat(parsedColor[2].toFixed(2))}%`;
    },
    []
  );

  return (
    <div className="preview-mode dark:preview-mode">
      <style jsx global>{`
        .preview-mode {
          --background: ${formatColor(resolvedTheme.background)};
          --foreground: ${formatColor(resolvedTheme.foreground)};
          --card: ${formatColor(resolvedTheme.card)};
          --card-foreground: ${formatColor(resolvedTheme.cardForeground)};
          --popover: ${formatColor(resolvedTheme.popover)};
          --popover-foreground: ${formatColor(resolvedTheme.popoverForeground)};
          --primary: ${formatColor(resolvedTheme.primary)};
          --primary-foreground: ${formatColor(resolvedTheme.primaryForeground)};
          --secondary: ${formatColor(resolvedTheme.secondary)};
          --secondary-foreground: ${formatColor(resolvedTheme.secondaryForeground)};
          --muted: ${formatColor(resolvedTheme.muted)};
          --muted-foreground: ${formatColor(resolvedTheme.mutedForeground)};
          --accent: ${formatColor(resolvedTheme.accent)};
          --accent-foreground: ${formatColor(resolvedTheme.accentForeground)};
          --destructive: ${formatColor(resolvedTheme.destructive)};
          --destructive-foreground: ${formatColor(resolvedTheme.destructiveForeground)};
          --success: ${formatColor(resolvedTheme.success)};
          --success-foreground: ${formatColor(resolvedTheme.successForeground)};
          --border: ${formatColor(resolvedTheme.border)};
          --input: ${formatColor(resolvedTheme.input)};
          --ring: ${formatColor(resolvedTheme.ring)};
        }
        .preview-mode.dark {
          --background: ${formatColor(resolvedTheme.background)};
          --foreground: ${formatColor(resolvedTheme.foreground)};
          --card: ${formatColor(resolvedTheme.card)};
          --card-foreground: ${formatColor(resolvedTheme.cardForeground)};
          --popover: ${formatColor(resolvedTheme.popover)};
          --popover-foreground: ${formatColor(resolvedTheme.popoverForeground)};
          --primary: ${formatColor(resolvedTheme.primary)};
          --primary-foreground: ${formatColor(resolvedTheme.primaryForeground)};
          --secondary: ${formatColor(resolvedTheme.secondary)};
          --secondary-foreground: ${formatColor(resolvedTheme.secondaryForeground)};
          --muted: ${formatColor(resolvedTheme.muted)};
          --muted-foreground: ${formatColor(resolvedTheme.mutedForeground)};
          --accent: ${formatColor(resolvedTheme.accent)};
          --accent-foreground: ${formatColor(resolvedTheme.accentForeground)};
          --destructive: ${formatColor(resolvedTheme.destructive)};
          --destructive-foreground: ${formatColor(resolvedTheme.destructiveForeground)};
          --success: ${formatColor(resolvedTheme.success)};
          --success-foreground: ${formatColor(resolvedTheme.successForeground)};
          --border: ${formatColor(resolvedTheme.border)};
          --input: ${formatColor(resolvedTheme.input)};
          --ring: ${formatColor(resolvedTheme.ring)};
        }
      `}</style>
      <div className="text-foreground bg-background">{children}</div>
    </div>
  );
}

// --background: ${resolvedTheme.background};
//           --foreground: ${resolvedTheme.foreground};
//           --card: ${resolvedTheme.card};
//           --card-foreground: ${resolvedTheme.cardForeground};
//           --popover: ${resolvedTheme.popover};
//           --popover-foreground: ${resolvedTheme.popoverForeground};
//           --primary: ${resolvedTheme.primary};
//           --primary-foreground: ${resolvedTheme.primaryForeground};
//           --secondary: ${resolvedTheme.secondary};
//           --secondary-foreground: ${resolvedTheme.secondaryForeground};
//           --muted: ${resolvedTheme.muted};
//           --muted-foreground: ${resolvedTheme.mutedForeground};
//           --accent: ${resolvedTheme.accent};
//           --accent-foreground: ${resolvedTheme.accentForeground};
//           --destructive: ${resolvedTheme.destructive};
//           --destructive-foreground: ${resolvedTheme.destructiveForeground};
//           --success: ${resolvedTheme.success};
//           --success-foreground: ${resolvedTheme.successForeground};
//           --border: ${resolvedTheme.border};
//           --input: ${resolvedTheme.input};
//           --ring: ${resolvedTheme.ring};
