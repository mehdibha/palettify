"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button, MailIcon } from "@palettify/ui";
import { cn } from "@palettify/utils";

interface EmailLoginButtonProps {
  className?: string;
}

export function EmailLoginButton(props: EmailLoginButtonProps) {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      icon={MailIcon}
      loading={loading}
      fullWidth
      onClick={() => {
        setLoading(true);
        signIn("email");
      }}
      variant="outlined"
      color="neutral"
      className={cn("", props.className)}
    >
      Sign in with Email
    </Button>
  );
}
