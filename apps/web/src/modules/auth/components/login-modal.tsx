import React from "react";
import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogTitle,
  DialogContent,
} from "@palettify/ui";
import { GithubLoginButton } from "./github-login-button";
import { GoogleLoginButton } from "./google-login-button";

interface LoginModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export const LoginModal = (props: LoginModalProps) => {
  const { open, onOpenChange, children } = props;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-sm pt-10">
        <DialogHeader>
          <DialogTitle className="text-center">Login</DialogTitle>
          <DialogDescription className="text-center">
            You have to login first.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-2">
          <GoogleLoginButton />
          <GithubLoginButton />
        </div>
      </DialogContent>
    </Dialog>
  );
};
