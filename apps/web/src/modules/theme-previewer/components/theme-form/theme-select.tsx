"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Button,
  Command,
  CommandGroup,
  CommandItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@palettify/ui";
import { cn } from "@palettify/utils";

const options = [
  {
    value: "light",
    label: "Light",
  },
  {
    value: "dark",
    label: "Dark",
  },
];

interface ThemeSelectProps {
  selectedTheme: "light" | "dark";
  onChange: (theme: "light" | "dark") => void;
}

export function ThemeSelect(props: ThemeSelectProps) {
  const { selectedTheme, onChange } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="filled"
          role="combobox"
          aria-expanded={open}
          className="w-[100px] justify-between"
        >
          {selectedTheme
            ? options.find((mode) => mode.value === selectedTheme)?.label
            : "Select..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[100px] p-0">
        <Command>
          <CommandGroup>
            {options.map((mode) => (
              <CommandItem
                key={mode.value}
                value={mode.value}
                onSelect={(currentValue: "dark" | "light") => {
                  onChange(currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedTheme === mode.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {mode.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
