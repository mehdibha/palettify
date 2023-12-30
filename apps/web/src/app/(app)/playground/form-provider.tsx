"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "@palettify/ui";

const lightTheme = {
  background: "0 0% 100%",
  foreground: "222.2 47.4% 11.2%",
  muted: "210 40% 96.1%",
  mutedForeground: "215.4 16.3% 46.9%",
  popover: "0 0% 100%",
  popoverForeground: "222.2 47.4% 11.2%",
  border: "214.3 31.8% 91.4%",
  input: "214.3 31.8% 91.4%",
  card: "0 0% 100%",
  cardForeground: "222.2 47.4% 11.2%",
  primary: "222.2 47.4% 11.2%",
  primaryForeground: "210 40% 98%",
  secondary: "210 40% 96.1%",
  secondaryForeground: "222.2 47.4% 11.2%",
  accent: "210 40% 96.1%",
  accentForeground: "222.2 47.4% 11.2%",
  destructive: "0 100% 50%",
  destructiveForeground: "210 40% 98%",
  ring: "215 20.2% 65.1%",
  radius: "0.5rem",
};

const darkTheme = {
  background: "224 71% 4%",
  foreground: "213 31% 91%",
  muted: "223 47% 11%",
  mutedForeground: "215.4 16.3% 56.9%",
  accent: "216 34% 17%",
  accentForeground: "210 40% 98%",
  popover: "224 71% 4%",
  popoverForeground: "215 20.2% 65.1%",
  border: "216 34% 17%",
  input: "216 34% 17%",
  card: "224 71% 4%",
  cardForeground: "213 31% 91%",
  primary: "210 40% 98%",
  primaryForeground: "222.2 47.4% 1.2%",
  secondary: "222.2 47.4% 11.2%",
  secondaryForeground: "210 40% 98%",
  destructive: "0 63% 31%",
  destructiveForeground: "210 40% 98%",
  ring: "216 34% 17%",
  radius: "0.5rem",
};

interface FormProviderProps {
  children: React.ReactNode;
}

export const FormProvider = (props: FormProviderProps) => {
  const { children } = props;

  const form = useForm({
    values: {
      library: "shadcn",
      lightTheme,
      darkTheme,
    },
  });
  return <Form {...form}>{children}</Form>;
};
