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
      --background: ${formatColor(form.watch("lightPalette").background)};
      --foreground: ${formatColor(form.watch("lightPalette").foreground)};
      --card: ${formatColor(form.watch("lightPalette").card)};
      --card-foreground: ${formatColor(form.watch("lightPalette").cardForeground)};
      --popover: ${formatColor(form.watch("lightPalette").popover)};
      --popover-foreground: ${formatColor(form.watch("lightPalette").popoverForeground)};
      --primary: ${formatColor(form.watch("lightPalette").primary)};
      --primary-foreground: ${formatColor(form.watch("lightPalette").primaryForeground)};
      --secondary: ${formatColor(form.watch("lightPalette").secondary)};
      --secondary-foreground: ${formatColor(
        form.watch("lightPalette").secondaryForeground
      )};
      --muted: ${formatColor(form.watch("lightPalette").muted)};
      --muted-foreground: ${formatColor(form.watch("lightPalette").mutedForeground)};
      --accent: ${formatColor(form.watch("lightPalette").accent)};
      --accent-foreground: ${formatColor(form.watch("lightPalette").accentForeground)};
      --destructive: ${formatColor(form.watch("lightPalette").destructive)};
      --destructive-foreground: ${formatColor(
        form.watch("lightPalette").destructiveForeground
      )};
      --border: ${formatColor(form.watch("lightPalette").border)};
      --input: ${formatColor(form.watch("lightPalette").input)};
      --ring: ${formatColor(form.watch("lightPalette").ring)};
      --radius: ${form.watch("lightPalette").radius};
    }
  
    .dark {
      --background: ${formatColor(form.watch("darkPalette").background)};
      --foreground: ${formatColor(form.watch("darkPalette").foreground)};
      --card: ${formatColor(form.watch("darkPalette").card)};
      --card-foreground: ${formatColor(form.watch("darkPalette").cardForeground)};
      --popover: ${formatColor(form.watch("darkPalette").popover)};
      --popover-foreground: ${formatColor(form.watch("darkPalette").popoverForeground)};
      --primary: ${formatColor(form.watch("darkPalette").primary)};
      --primary-foreground: ${formatColor(form.watch("darkPalette").primaryForeground)};
      --secondary: ${formatColor(form.watch("darkPalette").secondary)};
      --secondary-foreground: ${formatColor(
        form.watch("darkPalette").secondaryForeground
      )};
      --muted: ${formatColor(form.watch("darkPalette").muted)};
      --muted-foreground: ${formatColor(form.watch("darkPalette").mutedForeground)};
      --accent: ${formatColor(form.watch("darkPalette").accent)};
      --accent-foreground: ${formatColor(form.watch("darkPalette").accentForeground)};
      --destructive: ${formatColor(form.watch("darkPalette").destructive)};
      --destructive-foreground: ${formatColor(
        form.watch("darkPalette").destructiveForeground
      )};
      --border: ${formatColor(form.watch("darkPalette").border)};
      --input: ${formatColor(form.watch("darkPalette").input)};
      --ring: ${formatColor(form.watch("darkPalette").ring)};
      --radius: ${form.watch("darkPalette").radius};
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
