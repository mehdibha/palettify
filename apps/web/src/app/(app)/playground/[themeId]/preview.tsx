"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import {
  Button,
  Maximize2Icon,
  Minimize2Icon,
  MonitorIcon,
  ScrollArea,
  ScrollBar,
  SmartphoneIcon,
} from "@palettify/ui";
import { cn } from "@palettify/utils";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { Preview as LibraryPreview } from "@/modules/theme-previewer/components/preview";

interface PreviewProps {
  className?: string;
}

export const Preview = (props: PreviewProps) => {
  const { className } = props;

  const [mobileView, setMobileView] = React.useState(false);
  const [fullScreen, setFullScreen] = React.useState(false);
  const form = useFormContext();
  useScrollLock(fullScreen);

  const handleChangeMobileView = () => {
    setMobileView((prev) => !prev);
  };

  const handleChangeFullScreen = () => {
    setFullScreen((prev) => !prev);
  };

  return (
    <PreviewWrapper className={className} fullScreen={fullScreen}>
      <div className="bg-card h-full overflow-hidden rounded-md pb-10 shadow-xl">
        <div className="relative flex w-full items-center justify-between px-2 py-1">
          <span />
          <div className="flex items-center">
            <Button variant="text" size="icon-sm" onClick={handleChangeMobileView}>
              {mobileView ? <MonitorIcon size={18} /> : <SmartphoneIcon size={18} />}
            </Button>
            <Button variant="text" size="icon-sm" onClick={handleChangeFullScreen}>
              {fullScreen ? <Minimize2Icon size={18} /> : <Maximize2Icon size={18} />}
            </Button>
          </div>
        </div>
        <ScrollArea className="h-full w-full">
          <div
            className={cn("bg-background/50 h-full w-full", {
              "flex items-center justify-center p-2": mobileView,
            })}
          >
            <LibraryPreview library={form.watch("library")} />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </PreviewWrapper>
  );
};

interface PreviewWrapperProps {
  children: React.ReactNode;
  fullScreen?: boolean;
  className?: string;
}

const PreviewWrapper = (props: PreviewWrapperProps) => {
  const { fullScreen, className, children } = props;
  return (
    <div
      className={cn(
        "animate-in fade-in slide-in-from-top-1 fixed right-0 top-0 hidden h-[calc(100vh)] w-[calc(100%-460px+16px)] overflow-hidden p-4 pt-[64px] lg:block",
        {
          "z-[100000] block h-screen w-full p-0 xl:w-full xl:pt-0": fullScreen,
        },
        className
      )}
    >
      {children}
    </div>
  );
};
