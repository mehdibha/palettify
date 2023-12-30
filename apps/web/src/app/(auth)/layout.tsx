import { ReactNode } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "Login",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center pt-28 sm:px-6 lg:px-8">
      <div className="bg-card w-full max-w-md rounded-xl border px-4 py-12 shadow-lg sm:px-12">
        <Image
          alt={siteConfig.global.name}
          width={100}
          height={100}
          className="mx-auto h-12 object-contain"
          src={siteConfig.global.logo}
        />
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
