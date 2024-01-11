import { ThemesList } from "@/modules/themes/components/themes-list";
import { getUserLikedThemes, getUserLikes } from "@/modules/themes/services";

export default async function Page() {
  const userLikedThemes = await getUserLikedThemes();
  const userLikes = await getUserLikes();

  return (
    <div>
      <h2 className="pl-2 text-2xl font-bold">Liked themes</h2>
      <p className="text-muted-foreground pl-2">
        Here you can find all the themes you liked
      </p>
      <ThemesList themes={userLikedThemes} userLikes={userLikes} />
    </div>
  );
}
