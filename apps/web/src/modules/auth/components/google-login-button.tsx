"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { Button, GoogleIcon } from "@palettify/ui";

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
      className={props.className}
    >
      Sign in with Google
    </Button>
  );
};
