"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { Button, ButtonProps, LogOutIcon } from "@palettify/ui";
import { cn } from "@palettify/utils";

export const LogoutButton = (props: ButtonProps) => {
  const { className, ...restProps } = props;

  return (
    <Button
      size="icon"
      onClick={() => {
        signOut({ callbackUrl: `${window.location.origin}/login` });
      }}
      className={cn("", className)}
      {...restProps}
    >
      <LogOutIcon />
    </Button>
  );
};
