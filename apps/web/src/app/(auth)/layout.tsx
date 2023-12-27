import { ReactNode } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "Login",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="bg-card w-full max-w-md rounded-xl border px-4 py-12 shadow-lg sm:px-12">
        <Image
          alt={siteConfig.name}
          width={100}
          height={100}
          className="relative mx-auto h-12 w-auto dark:scale-110 dark:rounded-full dark:border dark:border-stone-400"
          src={siteConfig.logo}
        />
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
