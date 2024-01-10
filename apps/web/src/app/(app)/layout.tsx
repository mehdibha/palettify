import React from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Appayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-64px)] pb-36">{children}</div>
      <Footer />
    </>
  );
}
