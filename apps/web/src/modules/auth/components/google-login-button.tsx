"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { Button, GoogleIcon } from "@palettify/ui";
import { cn } from "@palettify/utils";

interface GithubLoginButtonProps {
  className?: string;
}
export const GoogleLoginButton = (props: GithubLoginButtonProps) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <Button
      icon={GoogleIcon}
      loading={loading}
      fullWidth
      onClick={() => {
        setLoading(true);
        signIn("google");
      }}
      className={cn("bg-black", props.className)}
    >
      Sign in with Google
    </Button>
  );
};
