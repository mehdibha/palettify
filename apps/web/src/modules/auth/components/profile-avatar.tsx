import { Avatar, AvatarFallback, AvatarImage } from "@palettify/ui";
import { getSession } from "@/modules/auth/services";

export async function ProfileAvatar() {
  const session = await getSession();

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={session?.user?.image as string | undefined} alt="@shadcn" />
      <AvatarFallback className="uppercase">
        {session?.user?.name ? session?.user?.name[0] : ""}
      </AvatarFallback>
    </Avatar>
  );
}
