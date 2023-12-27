"use client";

import { Suspense } from "react";
import { AuthLoginError } from "@/modules/auth/components/auth-login-error";
import { GithubLoginButton } from "@/modules/auth/components/github-login-button";
import { GoogleLoginButton } from "@/modules/auth/components/google-login-button";

export default function LoginPage() {
  return (
    <div>
      <h1 className="font-cal text-center text-3xl dark:text-white">Sign in</h1>
      <p className="mt-2 text-center text-sm text-stone-600 dark:text-stone-400">
        Build incredible websites in seconds. <br />
      </p>
      <Suspense fallback={null}>
        <AuthLoginError className="mt-4" />
      </Suspense>
      <div className="mt-8 flex flex-col gap-2">
        <GoogleLoginButton />
        <GithubLoginButton />
      </div>
    </div>
  );
}
