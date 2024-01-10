import { Avatar, AvatarFallback, AvatarImage } from "@palettify/ui";

interface ProfileAvatarProps {
  user?: {
    name?: string | null;
    username?: string | null;
    email?: string | null;
    image?: string | null;
  } | null;
}

export function ProfileAvatar(props: ProfileAvatarProps) {
  const { user } = props;

  const initials = user?.name ? user?.name[0] : user?.username ? user?.username[0] : null;

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage
        src={user?.image ?? undefined}
        alt={user?.name ?? user?.username ?? ""}
      />
      <AvatarFallback className="uppercase">{initials}</AvatarFallback>
    </Avatar>
  );
}
