"use client";

import React from "react";
import { useForm } from "react-hook-form";
import type { Theme } from "@palettify/database";
import { Form } from "@palettify/ui";

const lightTheme = {
  background: "#ffffff",
  foreground: "#000000",
  card: "#ffffff",
  cardForeground: "#070708",
  popover: "#ffffff",
  popoverForeground: "#09090b",
  primary: "#18181b",
  primaryForeground: "#000000",
  secondary: "#f4f4f5",
  secondaryForeground: "#18181b",
  muted: "#f4f4f5",
  mutedForeground: "#71717a",
  accent: "#f4f4f5",
  accentForeground: "#18181b",
  destructive: "#dc2828",
  destructiveForeground: "#fafafa",
  border: "#e4e4e7",
  input: "#d6c6e8",
  ring: "#a1a1aa",
  radius: 0.5,
};

const darkTheme = {
  background: "#09090b",
  foreground: "#fafafa",
  card: "#09090b",
  cardForeground: "#fafafa",
  popover: "#09090b",
  popoverForeground: "#fafafa",
  primary: "#fafafa",
  primaryForeground: "#18181b",
  secondary: "#27272a",
  secondaryForeground: "#fafafa",
  muted: "#27272a",
  mutedForeground: "#a1a1aa",
  accent: "#27272a",
  accentForeground: "#fafafa",
  destructive: "#801e1e",
  destructiveForeground: "#fafafa",
  border: "#27272a",
  input: "#27272a",
  ring: "#d4d4d8",
  radius: 0.5,
};

interface FormProviderProps {
  children: React.ReactNode;
  theme: Theme | null;
}

export const FormProvider = (props: FormProviderProps) => {
  const { theme, children } = props;

  const [mounted, setMounted] = React.useState(false);

  const form = useForm({
    values: {
      library: "shadcn",
      lightTheme: theme?.lightPalette ?? lightTheme,
      darkTheme: theme?.darkPalette ?? darkTheme,
    },
  });

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <Form {...form}>{children}</Form>;
};
