"use client";

import React from "react";
import { HslColor } from "react-colorful";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@palettify/ui";
import { cn } from "@palettify/utils";
import { ColorInput } from "./color-input";
import { LibrarySelect } from "./library-select";
import { ThemeSelect } from "./theme-select";

interface FormProps {
  className?: string;
}

export const UpdateSiteAppearance = (props: FormProps) => {
  const { className } = props;

  const [selectedMode, setSelectedMode] = React.useState<"light" | "dark">("dark");
  const [selectedLibrary, setSelectedLibrary] = React.useState<"shadcn" | "mui">(
    "shadcn"
  );

  const resolvedTheme = {
    mode: "light",
    background: "0 0% 100%",
    foreground: "240 10% 3.9%",
    card: "230 15% 85%",
    cardForeground: "240 10% 3.9%",
    popover: "0 0% 100%",
    popoverForeground: "240 10% 3.9%",
    primary: "358 60% 34%",
    primaryForeground: "355.7 100% 97.3%",
    secondary: "24.6 95% 53.1%",
    secondaryForeground: "60 9.1% 97.8%",
    muted: "240 4.8% 95.9%",
    mutedForeground: "240 3.8% 46.1%",
    accent: "226 14% 90%",
    accentForeground: "240 5.9% 10%",
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "0 0% 98%",
    success: "142 67% 20%",
    successForeground: "0 85.7% 97.3%",
    border: "240 6% 70%",
    input: "240 5.9% 90%",
    ring: "217 76% 31%",
    radius: "0.5rem",
  };

  const form = useForm({
    values: {
      theme: resolvedTheme,
    },
  });

  const handleChangeTheme = (theme: "light" | "dark") => {
    setSelectedMode(theme);
  };
  const handleChangeLibrary = (library: "shadcn" | "mui") => {
    setSelectedLibrary(library);
  };

  async function onSubmit(values: any) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("", className)}>
        {/* <div className="flex justify-end space-x-2">
          <Button disabled>Cancel</Button>
          <Button color="primary" loading={isPending}>
            Save changes
          </Button>
        </div> */}
        <div className="">
          <div className="flex space-x-2">
            <LibrarySelect
              selectedLibrary={selectedLibrary}
              onChange={handleChangeLibrary}
            />
            <ThemeSelect selectedTheme={selectedMode} onChange={handleChangeTheme} />
          </div>
          {Object.keys(themeForm).map((themeKey) => {
            const theme = themeForm[themeKey];
            return (
              <ColorContainer key={themeKey} title={theme.label}>
                {theme.fields.map((field) => (
                  <div
                    key={field.name}
                    className="mt-2 flex items-center justify-between"
                  >
                    <span>{field.label}</span>
                    <FormField
                      control={form.control}
                      name={`theme.${field.name}` as any}
                      render={({ field }) => {
                        const values = field.value.split(" ");

                        const h = parseInt(values[0], 10);
                        const s = parseInt(values[1], 10);
                        const l = parseInt(values[2], 10);

                        const color: HslColor = { h, s, l };
                        return (
                          <FormItem>
                            <FormControl>
                              {/* @ts-ignore */}
                              <ColorInput
                                color={color}
                                onChange={(newColor: HslColor) => {
                                  field.onChange(
                                    `${newColor.h} ${newColor.s}% ${newColor.l}%`
                                  );
                                }}
                              />
                            </FormControl>
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                ))}
              </ColorContainer>
            );
          })}
        </div>
      </form>
    </Form>
  );
};

interface ColorContainerProps {
  title: string;
  children: React.ReactNode;
}

const ColorContainer = (props: ColorContainerProps) => {
  const { title, children } = props;
  return (
    <div className="mt-4 rounded-md border p-4">
      <h2 className="mb-2 font-bold">{title}</h2>
      <div className="">
        <div>{children}</div>
      </div>
    </div>
  );
};

const themeForm = {
  default: {
    label: "Default",
    fields: [
      {
        label: "Background",
        name: "background",
      },
      {
        label: "Foreground",
        name: "foreground",
      },
    ],
  },
  card: {
    label: "Card",
    fields: [
      {
        label: "Background",
        name: "card",
      },
      {
        label: "Foreground",
        name: "cardForeground",
      },
    ],
  },
  popover: {
    label: "Popover",
    fields: [
      {
        label: "Background",
        name: "popover",
      },
      {
        label: "Foreground",
        name: "popoverForeground",
      },
    ],
  },
  primary: {
    label: "Primary",
    fields: [
      {
        label: "Background",
        name: "primary",
      },
      {
        label: "Foreground",
        name: "primaryForeground",
      },
    ],
  },
  secondary: {
    label: "Secondary",
    fields: [
      {
        label: "Background",
        name: "secondary",
      },
      {
        label: "Foreground",
        name: "secondaryForeground",
      },
    ],
  },
  muted: {
    label: "Muted",
    fields: [
      {
        label: "Background",
        name: "muted",
      },
      {
        label: "Foreground",
        name: "mutedForeground",
      },
    ],
  },
  accent: {
    label: "Accent",
    fields: [
      {
        label: "Background",
        name: "accent",
      },
      {
        label: "Foreground",
        name: "accentForeground",
      },
    ],
  },
  destructive: {
    label: "Destructive",
    fields: [
      {
        label: "Background",
        name: "destructive",
      },
      {
        label: "Foreground",
        name: "destructiveForeground",
      },
    ],
  },
  success: {
    label: "Success",
    fields: [
      {
        label: "Background",
        name: "success",
      },
      {
        label: "Foreground",
        name: "successForeground",
      },
    ],
  },
  border: {
    label: "Border",
    fields: [
      {
        label: "Background",
        name: "border",
      },
    ],
  },
  input: {
    label: "Input",
    fields: [
      {
        label: "Background",
        name: "input",
      },
    ],
  },
  ring: {
    label: "Ring",
    fields: [
      {
        label: "Background",
        name: "ring",
      },
    ],
  },
  radius: {
    label: "Radius",
    fields: [
      {
        label: "Background",
        name: "radius",
      },
    ],
  },
};
