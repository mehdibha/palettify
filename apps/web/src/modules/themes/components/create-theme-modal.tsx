import React from "react";
import { useFormStatus } from "react-dom";
import { useFormContext } from "react-hook-form";
import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  Input,
  Label,
  DialogDescription,
  DialogTitle,
  RadioGroup,
  RadioGroupItem,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  DialogContentWithoutPortal,
} from "@palettify/ui";
import { PlaceholderPreview, WebsitePreview } from "./theme-card";

interface CreateThemeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const CreateThemeModal = (props: CreateThemeModalProps) => {
  const { open, onOpenChange, children } = props;
  const form = useFormContext();
  const darkPalette = form.watch("darkPalette");
  const lightPalette = form.watch("lightPalette");

  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal={false}>
      <DialogTrigger asChild>
        {
          <Button type="button" color="primary">
            Save theme
          </Button>
        }
      </DialogTrigger>
      <DialogContentWithoutPortal className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Save your theme</DialogTitle>
          <DialogDescription>
            You can save your theme to your account and access it later.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="grid grid-cols-5 items-center gap-4">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input className="col-span-4" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="defaultMode"
            render={({ field }) => (
              <FormItem className="grid grid-cols-5 items-center gap-4">
                <FormLabel>Card view</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="col-span-4 mt-2 grid grid-cols-2 gap-4"
                  >
                    {[
                      { value: "light", palette: lightPalette },
                      { value: "dark", palette: darkPalette },
                    ].map((item) => (
                      <div>
                        <RadioGroupItem
                          value={item.value}
                          id={item.value}
                          className="peer sr-only"
                          aria-label={item.value}
                        />
                        <Label
                          htmlFor={item.value}
                          className="border-muted hover:bg-accent peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex cursor-pointer flex-col items-center justify-between rounded-md border-2 bg-transparent p-2"
                        >
                          <PlaceholderPreview
                            palette={item.palette}
                            className="pointer-events-none h-[150px]"
                          />
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <DialogFooter>{children}</DialogFooter>
      </DialogContentWithoutPortal>
    </Dialog>
  );
};
