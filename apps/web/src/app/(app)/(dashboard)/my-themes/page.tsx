import { ThemeCard } from "@/modules/themes/components/theme-card";
import { ThemesList } from "@/modules/themes/components/themes-list";
import { getUserThemes } from "@/modules/themes/services";
import { Features } from "@/modules/themes/types";

export default async function Page() {
  const userThemes = await getUserThemes();

  return (
    <div>
      <h2 className="pl-2 text-2xl font-bold">My themes</h2>
      <p className="text-muted-foreground pl-2">
        Here you can find all the themes you created
      </p>
      <ThemesList themes={userThemes} features={[Features.Delete]} />
    </div>
  );
}
