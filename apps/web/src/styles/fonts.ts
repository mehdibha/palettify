import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const display = localFont({
  src: "../assets/fonts/Acorn-Bold.woff2",
  variable: "--font-display",
  display: "swap",
});
