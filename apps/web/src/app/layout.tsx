import React from "react";
import { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@palettify/ui/styles/shared-globals.css";
import { cn } from "@palettify/utils";
import { display, inter } from "@/styles/fonts";
import "@/styles/globals.css";
import { siteConfig } from "@/config";
import { getSession } from "@/modules/auth/services";
import { Providers } from "./providers";

const config = siteConfig.global;

export const metadata: Metadata = {
  title: { default: config.title, template: `%s | ${config.name}` },
  description: config.description,
  keywords: config.keywords,
  authors: config.authors,
  creator: config.creator,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.url,
    title: config.title,
    description: config.description,
    siteName: config.name,
    images: [config.thumbnail],
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description,
    images: [config.thumbnail],
    creator: config.twitter.creator,
  },
  metadataBase: new URL(config.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-gradient-to-br from-[#e4e9ea] from-10% to-[#FFDEC1] to-80% dark:from-[#3f3541] dark:to-[#1d1917]",
          inter.variable,
          display.variable
        )}
        suppressHydrationWarning
      >
        <Providers>
          <Analytics />
          {children}
        </Providers>
      </body>
    </html>
  );
}
