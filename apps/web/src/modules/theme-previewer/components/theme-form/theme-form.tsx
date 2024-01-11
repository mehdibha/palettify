"use client";

import React, { useTransition } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { useFormContext } from "react-hook-form";
import { ThemeWithPalettes } from "@palettify/database";
import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Label,
  Switch,
  useToast,
} from "@palettify/ui";
import { LoginModal } from "@/modules/auth/components/login-modal";
import { updateTheme } from "@/modules/themes/actions";
import { CreateThemeModal } from "@/modules/themes/components/create-theme-modal";
import { ColorInput } from "./color-input";
import { CopyButton } from "./copy-button";
import { LibrarySelect } from "./library-select";
import { ThemeSelect } from "./theme-select";

interface FormProps {
  className?: string;
  theme?: ThemeWithPalettes;
}

export const ThemeForm = (props: FormProps) => {
  const { theme: themeDB, className } = props;

  const { data, status } = useSession();
  const userId = data?.user.id;
  const router = useRouter();
  const form = useFormContext();
  const [open, setOpen] = React.useState(false);
  const { themeId } = useParams();
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  const [isPending, startTransition] = useTransition();

  const mode = theme as "dark" | "light";

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const handleChangeLibrary = (library: "shadcn" | "mui") => {
    form.setValue("library", library);
  };

  function onSubmit(values: any) {
    startTransition(async () => {
      const result = await updateTheme({
        id: themeId as string | undefined,
        name: values.name,
        lightPalette: values.lightPalette,
        darkPalette: values.darkPalette,
        radius: values.radius,
        defaultMode: values.defaultMode ?? mode,
        published: values.published,
      });
      if (result?.error) {
        toast({ title: result?.error, variant: "destructive" });
      }
      if (result.success) {
        toast({
          title: "Your theme has been saved",
        });
        if (result.themeId !== themeId) {
          router.push(`/playground/${result.themeId}`);
        }
        router.refresh();
      }
      setOpen(false);
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            {themeDB && (
              <FormField
                control={form.control}
                name="published"
                render={({ field }) => {
                  console.log(field.value);
                  return (
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormLabel htmlFor="published">Published</FormLabel>
                      <FormControl>
                        <Switch
                          id="published"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
            )}
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={() => {
                form.reset();
              }}
            >
              Cancel
            </Button>
            {themeDB ? (
              status === "authenticated" ? (
                themeDB.name && themeDB.defaultMode && themeDB.userId === userId ? (
                  <Button loading={isPending} type="submit" color="primary">
                    Save changes
                  </Button>
                ) : (
                  <CreateThemeModal open={open} onOpenChange={setOpen}>
                    <Button loading={isPending} type="submit" color="primary">
                      Save theme
                    </Button>
                  </CreateThemeModal>
                )
              ) : (
                <LoginModal>
                  <Button color="primary">Save theme</Button>
                </LoginModal>
              )
            ) : status === "authenticated" ? (
              <CreateThemeModal open={open} onOpenChange={setOpen}>
                <Button loading={isPending} type="submit" color="primary">
                  Save theme
                </Button>
              </CreateThemeModal>
            ) : (
              <LoginModal>
                <Button color="primary">Save theme</Button>
              </LoginModal>
            )}
          </div>
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
                        name={`lightPalette.${field.name}` as any}
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
                        name={`darkPalette.${field.name}` as any}
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
          <FormField
            control={form.control}
            name="radius"
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
