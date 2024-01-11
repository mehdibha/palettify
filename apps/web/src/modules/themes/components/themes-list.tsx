"use client";

import React from "react";
import { Label, Tabs, TabsList, TabsTrigger } from "@palettify/ui";
import { Features } from "../types";
import { ThemeCard } from "./theme-card";

interface ThemesListProps {
  themes: any[];
  className?: string;
  features?: Features[];
}

export const ThemesList = (props: ThemesListProps) => {
  const { themes, features, className } = props;
  const [view, setView] = React.useState<"website" | "placeholder" | "palette">(
    "placeholder"
  );

  return (
    <div className={className}>
      <div className="flex items-center justify-end">
        <Label className="mr-4">View</Label>
        <Tabs
          value={view}
          onValueChange={(newValue: "website" | "placeholder" | "palette") =>
            setView(newValue)
          }
        >
          <TabsList>
            <TabsTrigger value="placeholder">Placeholder</TabsTrigger>
            <TabsTrigger value="website">Website</TabsTrigger>
            <TabsTrigger value="palette">Palettes</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="xs:grid-cols-2 mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {themes.map((theme, index) => {
          if (theme.palettes.length === 0) return null;
          const palette = theme.palettes.find(
            (palette) => palette.mode === theme.defaultMode
          );
          if (
            !palette ||
            !palette.background ||
            !palette.foreground ||
            !palette.card ||
            !palette.primary ||
            !palette.secondary ||
            !palette.muted ||
            !palette.primaryForeground ||
            !palette.secondaryForeground ||
            !palette.mutedForeground ||
            !palette.cardForeground ||
            !palette.border
          )
            return null;

          return (
            <ThemeCard
              key={index}
              themeId={theme.id}
              view={view}
              palette={{
                background: palette.background,
                foreground: palette.foreground,
                card: palette.card,
                cardForeground: palette.cardForeground,
                primary: palette.primary,
                primaryForeground: palette.primaryForeground,
                secondary: palette.secondary,
                secondaryForeground: palette.secondaryForeground,
                muted: palette.muted,
                mutedForeground: palette.mutedForeground,
                border: palette.border,
              }}
              features={features}
            />
          );
        })}
      </div>
    </div>
  );
};
