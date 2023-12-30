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
    value: "shadcn",
    label: "shadcn-ui",
  },
  {
    value: "mui",
    label: "MUI",
  },
];

interface LibrarySelectProps {
  selectedLibrary: "shadcn" | "mui";
  onChange: (Library: "shadcn" | "mui") => void;
}

export function LibrarySelect(props: LibrarySelectProps) {
  const { selectedLibrary, onChange } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="filled"
          role="combobox"
          aria-expanded={open}
          className="w-[120px] justify-between"
        >
          {selectedLibrary
            ? options.find((mode) => mode.value === selectedLibrary)?.label
            : "Select library..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[120px] p-0">
        <Command>
          <CommandGroup>
            {options.map((mode) => (
              <CommandItem
                key={mode.value}
                value={mode.value}
                onSelect={(currentValue: "shadcn" | "mui") => {
                  onChange(currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedLibrary === mode.value ? "opacity-100" : "opacity-0"
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
