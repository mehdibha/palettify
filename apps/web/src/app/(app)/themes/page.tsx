import { ThemeCard } from "@/modules/themes/components/theme-card";
import { getAllThemesWithMainColors } from "@/modules/themes/services";

export default async function PalettesPage() {
  const trendingThemes = await getAllThemesWithMainColors();

  return (
    <div className="container pt-20">
      <h1 className="font-display text-center text-5xl font-medium">Trending themes</h1>
      <p className="text-muted-foreground mt-4 text-center">
        Get inspired by thousands of themes and easily export for your popular react ui
        library.
      </p>
      <div className="xs:grid-cols-2 mt-20  grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {trendingThemes.map((theme, index) => {
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
            />
          );
        })}
      </div>
    </div>
  );
}

export const revalidate = 3600;

// const trendingThemes = [
//   {
//     palette: {
//       background: "#fff",
//       foreground: "#000",
//       primary: "#4942E4",
//       secondary: "#fcba03",
//       card: "#3d3d54",
//     },
//   },
//   {
//     palette: {
//       background: "#f7f7f7",
//       foreground: "#333",
//       primary: "#009688",
//       secondary: "#ff5722",
//       card: "#c0c0c0",
//     },
//   },
//   {
//     palette: {
//       background: "linear-gradient(to bottom right, #e4e9ea 10%, #FFDEC1 80%)",
//       foreground: "#fff",
//       primary: "#4caf50",
//       secondary: "#2196f3",
//       card: "#2c2c2c",
//     },
//   },
//   {
//     palette: {
//       background: "#fafafa",
//       foreground: "#333",
//       primary: "#ff4081",
//       secondary: "#03a9f4",
//       card: "#c0c0c0",
//     },
//   },
//   {
//     palette: {
//       background: "#121212",
//       foreground: "#fff",
//       primary: "#e91e63",
//       secondary: "#9c27b0",
//       card: "#1f1f1f",
//     },
//   },
//   {
//     palette: {
//       background: "#f5f5f5",
//       foreground: "#333",
//       primary: "#ff9800",
//       secondary: "#8bc34a",
//       card: "#c0c0c0",
//     },
//   },
//   {
//     palette: {
//       background: "#212121",
//       foreground: "#fff",
//       primary: "#ff5722",
//       secondary: "#cddc39",
//       card: "#2c2c2c",
//     },
//   },
//   {
//     palette: {
//       background: "#e0e0e0",
//       foreground: "#333",
//       primary: "#607d8b",
//       secondary: "#ffeb3b",
//       card: "#525252",
//     },
//   },
// ];
