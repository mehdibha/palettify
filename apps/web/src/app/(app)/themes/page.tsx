import { ThemeCard } from "@/modules/themes/components/theme-card";

export default function PalettesPage() {
  const trendingThemes = [
    {
      palette: {
        background: "#fff",
        foreground: "#000",
        primary: "#4942E4",
        secondary: "#fcba03",
        card: "#3d3d54",
      },
    },
    {
      palette: {
        background: "#f7f7f7",
        foreground: "#333",
        primary: "#009688",
        secondary: "#ff5722",
        card: "#c0c0c0",
      },
    },
    {
      palette: {
        background: "linear-gradient(to bottom right, #e4e9ea 10%, #FFDEC1 80%)",
        foreground: "#fff",
        primary: "#4caf50",
        secondary: "#2196f3",
        card: "#2c2c2c",
      },
    },
    {
      palette: {
        background: "#fafafa",
        foreground: "#333",
        primary: "#ff4081",
        secondary: "#03a9f4",
        card: "#c0c0c0",
      },
    },
    {
      palette: {
        background: "#121212",
        foreground: "#fff",
        primary: "#e91e63",
        secondary: "#9c27b0",
        card: "#1f1f1f",
      },
    },
    {
      palette: {
        background: "#f5f5f5",
        foreground: "#333",
        primary: "#ff9800",
        secondary: "#8bc34a",
        card: "#c0c0c0",
      },
    },
    {
      palette: {
        background: "#212121",
        foreground: "#fff",
        primary: "#ff5722",
        secondary: "#cddc39",
        card: "#2c2c2c",
      },
    },
    {
      palette: {
        background: "#e0e0e0",
        foreground: "#333",
        primary: "#607d8b",
        secondary: "#ffeb3b",
        card: "#525252",
      },
    },
  ];

  return (
    <div className="container pt-20">
      <h1 className="font-display text-center text-5xl font-medium">Trending themes</h1>
      <p className="text-muted-foreground mt-4 text-center">
        Get inspired by thousands of themes and easily export for your popular react ui
        library.
      </p>
      <div className="xs:grid-cols-2 mt-20  grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {trendingThemes.map((theme, index) => (
          <ThemeCard key={index} palette={theme.palette} />
        ))}
      </div>
    </div>
  );
}
