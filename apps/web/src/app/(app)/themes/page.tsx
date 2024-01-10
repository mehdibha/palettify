import { prisma } from "@palettify/database";
import { ThemesList } from "@/modules/themes/components/themes-list";

export default async function ThemesPage() {
  const trendingThemes = [];

  return (
    <div className="container pt-20">
      <h1 className="font-display text-center text-5xl font-medium">Trending themes</h1>
      <p className="text-muted-foreground mt-4 text-center">
        Get inspired by thousands of themes and easily export for your popular react ui
        library.
      </p>
      <ThemesList themes={trendingThemes} className="mt-8" />
    </div>
  );
}

export const revalidate = 3600;
