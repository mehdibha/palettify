import React from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LoginButton } from "@/components/header/login-button";
import { UserMenu } from "@/components/user-menu";

export default function Appayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header
        cta={
          <React.Suspense fallback={null}>
            <LoginButton />
          </React.Suspense>
        }
      >
        <React.Suspense fallback={null}>
          <UserMenu />
        </React.Suspense>
      </Header>
      <div className="min-h-[calc(100vh-64px)] pb-36">{children}</div>
      <Footer />
    </>
  );
}
