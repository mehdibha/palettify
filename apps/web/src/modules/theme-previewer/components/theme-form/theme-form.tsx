"use client";

import React, { useTransition } from "react";
import { useParams } from "next/navigation";
import { useTheme } from "next-themes";
import { useFormContext } from "react-hook-form";
import {
  Button,
  FormControl,
  FormField,
  FormItem,
  Input,
  Label,
  useToast,
} from "@palettify/ui";
import { cn } from "@palettify/utils";
import { updateTheme } from "@/modules/themes/actions";
import { ColorInput } from "./color-input";
import { CopyButton } from "./copy-button";
import { LibrarySelect } from "./library-select";
import { ThemeSelect } from "./theme-select";

interface FormProps {
  className?: string;
}

export const ThemeForm = (props: FormProps) => {
  const { className } = props;

  const { themeId } = useParams();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const form = useFormContext();
  const { theme, setTheme } = useTheme();

  const mode = theme as "dark" | "light";

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const handleChangeLibrary = (library: "shadcn" | "mui") => {
    form.setValue("library", library);
  };

  async function onSubmit(values: any) {
    startTransition(async () => {
      if (typeof themeId === "string") {
        const result = await updateTheme({
          id: themeId,
          lightPalette: values.lightTheme,
          darkPalette: values.lightTheme,
        });
        if (result?.error) {
          toast({ title: result?.error, variant: "destructive" });
        }
        if (result.success) {
          toast({
            title: "Your theme has been saved",
          });
        }
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={cn("", className)}>
      <div>
        <div className="mb-4 flex justify-end">
          <Button loading={isPending} type="submit" color="primary">
            Save changes
          </Button>
        </div>
        <div className="flex flex-wrap justify-start gap-2">
          <LibrarySelect
            selectedLibrary={form.watch("library")}
            onChange={handleChangeLibrary}
          />
          <ThemeSelect selectedTheme={mode} onChange={handleChangeTheme} />
          <CopyButton />
        </div>
        {Object.keys(themeForm).map((themeKey) => {
          const themeSection = themeForm[themeKey];
          return (
            <ColorContainer key={themeKey} title={themeSection.label}>
              {mode === "light" &&
                themeSection.fields.map((field) => {
                  return (
                    <div
                      key={field.name}
                      className="mt-2 flex items-center justify-between"
                    >
                      <span>{field.label}</span>
                      <FormField
                        control={form.control}
                        name={`lightTheme.${field.name}` as any}
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormControl>
                                <ColorInput
                                  color={field.value}
                                  onChange={(newColor: string) => {
                                    field.onChange(newColor);
                                  }}
                                />
                              </FormControl>
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                  );
                })}
              {mode === "dark" &&
                themeSection.fields.map((field) => {
                  return (
                    <div
                      key={field.name}
                      className="mt-2 flex items-center justify-between"
                    >
                      <span>{field.label}</span>
                      <FormField
                        control={form.control}
                        name={`darkTheme.${field.name}` as any}
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormControl>
                                <ColorInput
                                  color={field.value}
                                  onChange={(newColor: string) => {
                                    field.onChange(newColor);
                                  }}
                                />
                              </FormControl>
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                  );
                })}
            </ColorContainer>
          );
        })}
        <div className="mt-4 rounded-md border p-4">
          <Label>Radius</Label>
          {mode === "light" && (
            <FormField
              control={form.control}
              name="lightTheme.radius"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          )}
          {mode === "dark" && (
            <FormField
              control={form.control}
              name="darkTheme.radius"
              render={({ field }) => {
                return (
                  <FormItem className="mt-2">
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          )}
        </div>
      </div>
    </form>
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
};
