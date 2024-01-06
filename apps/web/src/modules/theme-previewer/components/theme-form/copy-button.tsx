"use client";

import React from "react";
import Color from "color";
import { useFormContext } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
  CopyIcon,
  ScrollArea,
  CheckIcon,
} from "@palettify/ui";

export function CopyButton() {
  const [isCopied, setIsCopied] = React.useState(false);
  const form = useFormContext();

  const formatColor = React.useMemo(
    () => (color: string) => {
      const parsedColor = Color(color).hsl().color;
      return `${parseFloat(parsedColor[0].toFixed(2))} ${parseFloat(
        parsedColor[1].toFixed(2)
      )}% ${parseFloat(parsedColor[2].toFixed(2))}%`;
    },
    []
  );

  const variables = `@layer base {
    :root {
      --background: ${formatColor(form.watch("lightTheme").background)};
      --foreground: ${formatColor(form.watch("lightTheme").foreground)};
      --card: ${formatColor(form.watch("lightTheme").card)};
      --card-foreground: ${formatColor(form.watch("lightTheme").cardForeground)};
      --popover: ${formatColor(form.watch("lightTheme").popover)};
      --popover-foreground: ${formatColor(form.watch("lightTheme").popoverForeground)};
      --primary: ${formatColor(form.watch("lightTheme").primary)};
      --primary-foreground: ${formatColor(form.watch("lightTheme").primaryForeground)};
      --secondary: ${formatColor(form.watch("lightTheme").secondary)};
      --secondary-foreground: ${formatColor(
        form.watch("lightTheme").secondaryForeground
      )};
      --muted: ${formatColor(form.watch("lightTheme").muted)};
      --muted-foreground: ${formatColor(form.watch("lightTheme").mutedForeground)};
      --accent: ${formatColor(form.watch("lightTheme").accent)};
      --accent-foreground: ${formatColor(form.watch("lightTheme").accentForeground)};
      --destructive: ${formatColor(form.watch("lightTheme").destructive)};
      --destructive-foreground: ${formatColor(
        form.watch("lightTheme").destructiveForeground
      )};
      --border: ${formatColor(form.watch("lightTheme").border)};
      --input: ${formatColor(form.watch("lightTheme").input)};
      --ring: ${formatColor(form.watch("lightTheme").ring)};
      --radius: ${form.watch("lightTheme").radius};
    }
  
    .dark {
      --background: ${formatColor(form.watch("lightTheme").background)};
      --foreground: ${formatColor(form.watch("lightTheme").foreground)};
      --card: ${formatColor(form.watch("lightTheme").card)};
      --card-foreground: ${formatColor(form.watch("lightTheme").cardForeground)};
      --popover: ${formatColor(form.watch("lightTheme").popover)};
      --popover-foreground: ${formatColor(form.watch("lightTheme").popoverForeground)};
      --primary: ${formatColor(form.watch("lightTheme").primary)};
      --primary-foreground: ${formatColor(form.watch("lightTheme").primaryForeground)};
      --secondary: ${formatColor(form.watch("lightTheme").secondary)};
      --secondary-foreground: ${formatColor(
        form.watch("lightTheme").secondaryForeground
      )};
      --muted: ${formatColor(form.watch("lightTheme").muted)};
      --muted-foreground: ${formatColor(form.watch("lightTheme").mutedForeground)};
      --accent: ${formatColor(form.watch("lightTheme").accent)};
      --accent-foreground: ${formatColor(form.watch("lightTheme").accentForeground)};
      --destructive: ${formatColor(form.watch("lightTheme").destructive)};
      --destructive-foreground: ${formatColor(
        form.watch("lightTheme").destructiveForeground
      )};
      --border: ${formatColor(form.watch("lightTheme").border)};
      --input: ${formatColor(form.watch("lightTheme").input)};
      --ring: ${formatColor(form.watch("lightTheme").ring)};
      --radius: ${form.watch("lightTheme").radius};
    }
  }`;

  function onCopy() {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
    navigator.clipboard.writeText(variables);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button icon={CopyIcon}>Copy theme</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Theme</DialogTitle>
          <DialogDescription>
            Copy and paste the following code into your CSS file.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="bg-card relative max-h-[50vh] rounded-lg border">
          <Button
            icon={isCopied ? CheckIcon : CopyIcon}
            onClick={onCopy}
            className="absolute right-4 top-4 gap-2"
          >
            Copy
          </Button>
          <pre className="p-4 text-sm leading-normal">{variables}</pre>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
