import { ThemeCard } from "@/modules/themes/components/theme-card";

export default function PalettesPage() {
  const trendingThemes = [
    {
      background: "#fff",
      foreground: "#000",
      primary: "#4942E4",
      secondary: "#fcba03",
      card: "#3d3d54",
    },
    {
      background: "#f7f7f7",
      foreground: "#333",
      primary: "#009688",
      secondary: "#ff5722",
      card: "#ffffff",
    },
    {
      background: "#1c1c1c",
      foreground: "#fff",
      primary: "#4caf50",
      secondary: "#2196f3",
      card: "#2c2c2c",
    },
    {
      background: "#fafafa",
      foreground: "#333",
      primary: "#ff4081",
      secondary: "#03a9f4",
      card: "#ffffff",
    },
    {
      background: "#121212",
      foreground: "#fff",
      primary: "#e91e63",
      secondary: "#9c27b0",
      card: "#1f1f1f",
    },
    {
      background: "#f5f5f5",
      foreground: "#333",
      primary: "#ff9800",
      secondary: "#8bc34a",
      card: "#ffffff",
    },
    {
      background: "#212121",
      foreground: "#fff",
      primary: "#ff5722",
      secondary: "#cddc39",
      card: "#2c2c2c",
    },
    {
      background: "#e0e0e0",
      foreground: "#333",
      primary: "#607d8b",
      secondary: "#ffeb3b",
      card: "#ffffff",
    },
    {
      "background": "#2C3E50",
      "foreground": "#ECF0F1",
      "primary": "#3498DB",
      "secondary": "#E74C3C",
      "card": "#34495E"
    },
    {
      "background": "#EDEDED",
      "foreground": "#333333",
      "primary": "#673AB7",
      "secondary": "#FFC107",
      "card": "#FFFFFF"
    },
    {
      "background": "#E0F7FA",
      "foreground": "#37474F",
      "primary": "#4CAF50",
      "secondary": "#FF5722",
      "card": "#FFFFFF"
    },
    {
      "background": "#F5F5F5",
      "foreground": "#212121",
      "primary": "#9C27B0",
      "secondary": "#607D8B",
      "card": "#FFFFFF"
    },
    {
      "background": "#FFECB3",
      "foreground": "#333333",
      "primary": "#FF9800",
      "secondary": "#795548",
      "card": "#FFF8E1"
    },
  ];

  return (
    <div className="container pt-20">
      <h1 className="font-display text-center text-5xl font-medium">Trending themes</h1>
      <p className="text-muted-foreground mt-4 text-center">
        Get inspired by thousands of themes and easily export for your popular react ui
        library.
      </p>
      <div className="mt-20 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {trendingThemes.map((theme) => (
          <ThemeCard {...theme} />
        ))}
      </div>
    </div>
  );
}
