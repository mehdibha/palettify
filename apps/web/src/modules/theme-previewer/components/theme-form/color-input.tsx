import React from "react";
import { HslColor, HslColorPicker } from "react-colorful";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@palettify/ui";

interface ColorInputProps {
  color: HslColor;
  onChange: (newColor: HslColor) => void;
}

export const ColorInput = (props: ColorInputProps) => {
  const { color, onChange } = props;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon-sm" variant="filled">
          <div className="h-full w-full p-[6px]">
            <div
              className="h-full w-full rounded"
              style={{ background: `hsl(${color.h} ${color.s}% ${color.l}%)` }}
            ></div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2">
        <HslColorPicker color={color} onChange={onChange} />
      </PopoverContent>
    </Popover>
  );
};
