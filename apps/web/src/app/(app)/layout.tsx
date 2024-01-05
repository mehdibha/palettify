import React from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getSession } from "@/modules/auth/services";

export default async function Appayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  return (
    <>
      <Header user={session?.user} />
      <div className="min-h-[calc(100vh-64px)] pb-36">{children}</div>
      <Footer />
    </>
  );
}
