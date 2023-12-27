"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { X } from "lucide-react";
import { cn } from "@palettify/utils";
import { Badge } from "./badge";
import { Command, CommandGroup, CommandItem } from "./command";

type Option = string;

interface MultiSelectFreeSoloProps {
  placeholder?: string;
  selectedValues: Option[];
  onChange: (newSelectedValues: Option[]) => void;
}

export function MultiSelectFreeSolo(props: MultiSelectFreeSoloProps) {
  const { placeholder, selectedValues, onChange } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback(
    (option: Option) => {
      onChange(
        selectedValues.filter((elem) => {
          return elem !== option;
        })
      );
    },
    [onChange, selectedValues]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            const newSelected = [...selectedValues];
            newSelected.pop();
            onChange(newSelected);
            return;
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    [onChange, selectedValues]
  );

  const addable = selectedValues.filter((option) => option === inputValue).length === 0;

  return (
    <Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
      <div className="border-input ring-offset-background focus-within:ring-ring group rounded-md border px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          <span
            className={cn("flex flex-wrap gap-1", { "mr-2": selectedValues.length > 0 })}
          >
            {selectedValues.map((option) => {
              return (
                <Badge key={option}>
                  {option}
                  <button
                    className="ring-offset-background focus:ring-ring ml-1 rounded-full outline-none focus:ring-2 focus:ring-offset-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUnselect(option);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={() => handleUnselect(option)}
                  >
                    <X className="text-muted-foreground hover:text-foreground h-3 w-3" />
                  </button>
                </Badge>
              );
            })}
          </span>
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            className="placeholder:text-muted-foreground flex-1 bg-transparent outline-none"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && addable && inputValue ? (
          <div className="bg-popover text-popover-foreground animate-in absolute top-0 z-10 w-full rounded-md border shadow-md outline-none">
            <CommandGroup className="h-full overflow-auto">
              <CommandItem
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onSelect={() => {
                  setInputValue("");
                  onChange([...selectedValues, inputValue]);
                }}
                className={"cursor-pointer"}
              >
                {inputValue}
              </CommandItem>
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  );
}
