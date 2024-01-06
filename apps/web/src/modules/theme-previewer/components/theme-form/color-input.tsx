import React from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  inputBase,
} from "@palettify/ui";
import { cn } from "@palettify/utils";

interface ColorInputProps {
  color: string;
  onChange: (newColor: string) => void;
}

export const ColorInput = (props: ColorInputProps) => {
  const { color, onChange } = props;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon-sm" variant="filled">
          <div className="h-full w-full p-[6px]">
            <div className="h-full w-full rounded" style={{ background: color }}></div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2">
        <HexColorPicker color={color} onChange={onChange} />
        <HexColorInput
          color={color}
          onChange={onChange}
          className={cn(inputBase, "mt-2")}
        />
      </PopoverContent>
    </Popover>
  );
};
