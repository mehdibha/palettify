import { ThemeCard } from "@/modules/themes/components/theme-card";
import { getUserThemes } from "@/modules/themes/services";

export default async function Page() {
  const trendingThemes = await getUserThemes();

  return (
    <div>
      <h2 className="text-2xl font-bold ">My themes</h2>
      <p className="text-muted-foreground">
        Here you can find all the themes you created
      </p>
      <div className="xs:grid-cols-2 mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
