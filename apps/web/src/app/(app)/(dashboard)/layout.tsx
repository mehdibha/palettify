"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@palettify/ui";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;

  const pathname = usePathname();

  return (
    <Tabs value={pathname} className="container pt-10">
      <TabsList className="mb-2 rounded-xl">
        {[
          {
            href: "/my-themes",
            label: "My themes",
          },
          {
            href: "/saved",
            label: "Saved themes",
          },
          {
            href: "/account",
            label: "Account",
          },
        ].map((link) => (
          <TabsTrigger value={link.href} asChild className="rounded-lg">
            <Link href={link.href}>{link.label}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
}
