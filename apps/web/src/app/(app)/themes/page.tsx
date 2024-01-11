import { ThemesList } from "@/modules/themes/components/themes-list";
import { getTrendingThemes, getUserLikes } from "@/modules/themes/services";

export default async function ThemesPage() {
  const trendingThemes = await getTrendingThemes();
  const userLikes = await getUserLikes();

  return (
    <div className="container pt-20">
      <h1 className="font-display text-center text-5xl font-medium">Trending themes</h1>
      <p className="text-muted-foreground mt-4 text-center">
        Get inspired by thousands of themes and easily export for your popular ui library.
      </p>
      <ThemesList themes={trendingThemes} userLikes={userLikes} className="mt-8" />
    </div>
  );
}

export const revalidate = 3600;
