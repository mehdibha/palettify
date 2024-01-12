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

  const lightPalette = form.watch("lightPalette");
  const darkPalette = form.watch("darkPalette");
  const resolvedPalette = theme === "dark" ? darkPalette : lightPalette;
  const radius = form.watch("radius");

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
    <div className="preview-mode dark:preview-mode h-full">
      <style jsx global>{`
        .preview-mode {
          --background: ${formatColor(resolvedPalette.background)};
          --foreground: ${formatColor(resolvedPalette.foreground)};
          --card: ${formatColor(resolvedPalette.card)};
          --card-foreground: ${formatColor(resolvedPalette.cardForeground)};
          --popover: ${formatColor(resolvedPalette.popover)};
          --popover-foreground: ${formatColor(resolvedPalette.popoverForeground)};
          --primary: ${formatColor(resolvedPalette.primary)};
          --primary-foreground: ${formatColor(resolvedPalette.primaryForeground)};
          --secondary: ${formatColor(resolvedPalette.secondary)};
          --secondary-foreground: ${formatColor(resolvedPalette.secondaryForeground)};
          --muted: ${formatColor(resolvedPalette.muted)};
          --muted-foreground: ${formatColor(resolvedPalette.mutedForeground)};
          --accent: ${formatColor(resolvedPalette.accent)};
          --accent-foreground: ${formatColor(resolvedPalette.accentForeground)};
          --destructive: ${formatColor(resolvedPalette.destructive)};
          --destructive-foreground: ${formatColor(resolvedPalette.destructiveForeground)};
          --success: ${formatColor(resolvedPalette.success)};
          --success-foreground: ${formatColor(resolvedPalette.successForeground)};
          --border: ${formatColor(resolvedPalette.border)};
          --input: ${formatColor(resolvedPalette.input)};
          --ring: ${formatColor(resolvedPalette.ring)};
          --radius: ${radius}rem;
        }
        .preview-mode.dark {
          --background: ${formatColor(resolvedPalette.background)};
          --foreground: ${formatColor(resolvedPalette.foreground)};
          --card: ${formatColor(resolvedPalette.card)};
          --card-foreground: ${formatColor(resolvedPalette.cardForeground)};
          --popover: ${formatColor(resolvedPalette.popover)};
          --popover-foreground: ${formatColor(resolvedPalette.popoverForeground)};
          --primary: ${formatColor(resolvedPalette.primary)};
          --primary-foreground: ${formatColor(resolvedPalette.primaryForeground)};
          --secondary: ${formatColor(resolvedPalette.secondary)};
          --secondary-foreground: ${formatColor(resolvedPalette.secondaryForeground)};
          --muted: ${formatColor(resolvedPalette.muted)};
          --muted-foreground: ${formatColor(resolvedPalette.mutedForeground)};
          --accent: ${formatColor(resolvedPalette.accent)};
          --accent-foreground: ${formatColor(resolvedPalette.accentForeground)};
          --destructive: ${formatColor(resolvedPalette.destructive)};
          --destructive-foreground: ${formatColor(resolvedPalette.destructiveForeground)};
          --success: ${formatColor(resolvedPalette.success)};
          --success-foreground: ${formatColor(resolvedPalette.successForeground)};
          --border: ${formatColor(resolvedPalette.border)};
          --input: ${formatColor(resolvedPalette.input)};
          --ring: ${formatColor(resolvedPalette.ring)};
          --radius: ${radius}rem;
        }
      `}</style>
      <div className="text-foreground bg-background h-full">{children}</div>
    </div>
  );
}
