"use client";

import Color from "color";
import { CopyIcon, ScrollArea, useToast } from "@palettify/ui";
import { cn } from "@palettify/utils";

interface ThemeCardProps {
  background?: string;
  foreground?: string;
  primary?: string;
  secondary?: string;
  card?: string;
}

export const ThemeCard = (props: ThemeCardProps) => {
  const {
    background = "#fff",
    foreground = "#000",
    primary = "#4942E4",
    secondary = "#fcba03",
    card = "#3d3d54",
  } = props;

  const { toast } = useToast();

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    toast({ title: "Color copied successfully", variant: "default" });
  };

  return (
    <div>
      <ScrollArea
        className="h-[300px] rounded border shadow-md"
        scrollHideDelay={10}
        style={{ backgroundColor: background }}
      >
        {/* Navbar */}
        <div className="flex justify-between px-4 py-2">
          <div className="w-6">
            <div
              className="h-2 w-4 rounded bg-black"
              style={{ backgroundColor: foreground }}
            />
          </div>
          <div className="flex items-center space-x-1">
            <div
              className="h-2 w-4 rounded-full"
              style={{ backgroundColor: foreground }}
            />
            <div
              className="h-2 w-4 rounded-full"
              style={{ backgroundColor: foreground }}
            />
            <div
              className="h-2 w-4 rounded-full"
              style={{ backgroundColor: foreground }}
            />
          </div>
          <div className="h-2 w-6 rounded" style={{ backgroundColor: primary }} />
        </div>
        {/* main */}
        <div className="mx-auto px-4 pb-6">
          {/* Hero */}
          <div className="flex flex-col items-center pt-8">
            <div
              className="h-2 w-[120px] rounded"
              style={{ backgroundColor: foreground }}
            />
            <div
              className="mt-1 h-2 w-[60px] rounded"
              style={{ backgroundColor: foreground }}
            />
            {/* CTA */}
            <div className="mt-4 flex justify-center space-x-2">
              <div className="h-3 w-8 rounded" style={{ backgroundColor: primary }} />
              <div
                className="h-3 w-8 rounded border"
                style={{ borderColor: foreground }}
              />
            </div>
          </div>
          {/* trusted by */}
          <div className="mt-6 flex flex-col items-center">
            <div
              className="h-1 w-[40px] rounded"
              style={{ backgroundColor: foreground }}
            />
            <div className="mt-1 flex justify-center space-x-1">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-4 rounded-full"
                    style={{ backgroundColor: foreground }}
                  />
                ))}
            </div>
          </div>
          {/* features */}
          <div className="mt-4 flex flex-col items-center">
            <div
              className="mt-1 h-2 w-[40px] rounded"
              style={{ backgroundColor: foreground }}
            />
            <div className="mt-2 grid w-full grid-cols-3 gap-2">
              {Array(6)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-5 rounded"
                    style={{ backgroundColor: card }}
                  />
                ))}
            </div>
          </div>
          {/* testimonials */}
          <div className="mt-4 flex flex-col items-center">
            <div
              className="mt-1 h-2 w-[70px] rounded"
              style={{ backgroundColor: foreground }}
            />
            <div className="mt-2 grid w-full grid-cols-4 gap-2">
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-8 rounded"
                    style={{ backgroundColor: card }}
                  />
                ))}
            </div>
          </div>
          {/* CTA */}
          <div className="mt-8 flex flex-col items-center">
            <div
              className="h-3 w-[50px] rounded-full"
              style={{ backgroundColor: foreground }}
            />
            <div
              className="mt-1 h-2 w-[70px] rounded"
              style={{ backgroundColor: foreground }}
            />
            <div className="mt-2 h-3 w-8 rounded" style={{ backgroundColor: primary }} />
          </div>
        </div>
        {/* footer */}
        <div className="flex justify-between border-t px-2 py-2">
          <div className="h-2 w-[70px] rounded" style={{ backgroundColor: foreground }} />
          <div className="flex items-center space-x-1">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-[3px]"
                  style={{ backgroundColor: foreground }}
                />
              ))}
          </div>
        </div>
      </ScrollArea>
      <div className="mt-2 flex w-full gap-2">
        {[
          { label: "Background", value: background },
          { label: "Foreground", value: foreground },
          { label: "Primary", value: primary },
          { label: "Secondary", value: secondary },
          { label: "Card", value: card },
        ].map((item) => {
          const isDark = Color(item.value).isDark();

          return (
            <div
              key={item.label}
              className="group h-12 w-[1px] grow cursor-pointer overflow-hidden rounded border px-2 py-1 shadow-md duration-300 hover:w-[40%]"
              onClick={() => {
                handleCopy(item.value);
              }}
              style={{ backgroundColor: item.value }}
            >
              <div
                className={cn(
                  "hidden h-full items-center justify-between text-xs text-black group-hover:flex",
                  {
                    "text-white": isDark,
                  }
                )}
              >
                <div>
                  <p className="font-bold">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
                <CopyIcon size={18} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
