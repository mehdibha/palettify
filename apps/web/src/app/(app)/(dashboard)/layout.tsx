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
      <TabsList className="rounded-xl">
        {[
          {
            href: "/my-themes",
            label: "My themes",
            disabled: false,
          },
          {
            href: "/liked",
            label: "Likes",
            disabled: false,
          },
          {
            href: "/account",
            label: "Account",
            disabled: true,
          },
        ].map((link) => (
          <TabsTrigger
            key={link.href}
            disabled={link.disabled}
            value={link.href}
            asChild={!link.disabled}
            className="rounded-lg"
          >
            {link.disabled ? link.label : <Link href={link.href}>{link.label}</Link>}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="mt-8">{children}</div>
    </Tabs>
  );
}
