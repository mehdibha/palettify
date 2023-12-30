"use client";

import React from "react";
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

export default function CopyButton() {
  const [isCopied, setIsCopied] = React.useState(false);
  const form = useFormContext();

  const variables = `@layer base {
    :root {
      --background: ${form.watch("lightTheme").background};
      --foreground: ${form.watch("lightTheme").foreground};
  
      --card: ${form.watch("lightTheme").card};
      --card-foreground: ${form.watch("lightTheme").cardForeground};
  
      --popover: ${form.watch("lightTheme").popover}
      --popover-foreground: ${form.watch("lightTheme").popoverForeground};
  
      --primary: ${form.watch("lightTheme").primary};
      --primary-foreground: ${form.watch("lightTheme").primaryForeground};
  
      --secondary: ${form.watch("lightTheme").secondary};
      --secondary-foreground: ${form.watch("lightTheme").secondaryForeground};
  
      --muted: ${form.watch("lightTheme").muted};
      --muted-foreground: ${form.watch("lightTheme").mutedForeground};
  
      --accent: ${form.watch("lightTheme").accent};
      --accent-foreground: ${form.watch("lightTheme").accentForeground};
  
      --destructive: ${form.watch("lightTheme").destructive};
      --destructive-foreground: ${form.watch("lightTheme").destructiveForeground};
  
      --border: ${form.watch("lightTheme").border};
      --input: ${form.watch("lightTheme").input};
      --ring: ${form.watch("lightTheme").ring};
  
      --radius: ${form.watch("lightTheme").radius};
    }
  
    .dark {
      --background: ${form.watch("lightTheme").background};
      --foreground: ${form.watch("lightTheme").foreground};
  
      --card: ${form.watch("lightTheme").card};
      --card-foreground: ${form.watch("lightTheme").cardForeground};
  
      --popover: ${form.watch("lightTheme").popover}
      --popover-foreground: ${form.watch("lightTheme").popoverForeground};
  
      --primary: ${form.watch("lightTheme").primary};
      --primary-foreground: ${form.watch("lightTheme").primaryForeground};
  
      --secondary: ${form.watch("lightTheme").secondary};
      --secondary-foreground: ${form.watch("lightTheme").secondaryForeground};
  
      --muted: ${form.watch("lightTheme").muted};
      --muted-foreground: ${form.watch("lightTheme").mutedForeground};
  
      --accent: ${form.watch("lightTheme").accent};
      --accent-foreground: ${form.watch("lightTheme").accentForeground};
  
      --destructive: ${form.watch("lightTheme").destructive};
      --destructive-foreground: ${form.watch("lightTheme").destructiveForeground};
  
      --border: ${form.watch("lightTheme").border};
      --input: ${form.watch("lightTheme").input};
      --ring: ${form.watch("lightTheme").ring};
  
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
