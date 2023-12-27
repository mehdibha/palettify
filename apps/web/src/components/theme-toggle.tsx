"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@palettify/ui";
import { MoonIcon, SunIcon } from "@palettify/ui";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="text"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <SunIcon className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <MoonIcon className="hidden h-5 w-5 dark:block" />
    </Button>
  );
};
