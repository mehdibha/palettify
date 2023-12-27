"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button, GithubIcon } from "@palettify/ui";
import { cn } from "@palettify/utils";

interface GithubLoginButtonProps {
  className?: string;
}

export function GithubLoginButton(props: GithubLoginButtonProps) {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      icon={GithubIcon}
      loading={loading}
      fullWidth
      onClick={() => {
        setLoading(true);
        signIn("github");
      }}
      className={cn("bg-black", props.className)}
    >
      Sign in with Github
    </Button>
  );
}
