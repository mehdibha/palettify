"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  LogOutIcon,
} from "@palettify/ui";
import { ProfileAvatar } from "@/modules/auth/components/profile-avatar";

interface UserMenuProps {
  user: {
    name?: string | null;
    username?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export const UserMenu = (props: UserMenuProps) => {
  const { user } = props;

  const displayedName = user?.name ?? user?.username ?? null;

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="text" size="icon">
          <ProfileAvatar user={user} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            {displayedName && (
              <p className="text-sm font-medium leading-none">{displayedName}</p>
            )}
            <p className="text-muted-foreground text-xs leading-none">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/my-themes">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/account">Account</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex cursor-pointer justify-between"
            onClick={() => {
              signOut();
            }}
          >
            Log out
            <DropdownMenuShortcut>
              <LogOutIcon size={16} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
