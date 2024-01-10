import React from "react";
import { getSession } from "@/modules/auth/services";
import { UserMenu } from "./user-menu";

export const UserMenuWrapper = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    return null;
  }

  return <UserMenu user={user} />;
};
