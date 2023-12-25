"use client";

import React from "react";
import { Button, XIcon } from "@palettify/ui";
import { CollectEmailsModal } from "./collect-emails-modal";

export const Banner = () => {
  const [displayed, setDisplayed] = React.useState(true);

  if (!displayed) return null;

  return (
    <div className="bg-card relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 shadow sm:px-3.5 sm:before:flex-1">
      {/* Background */}
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl dark:opacity-40"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl dark:opacity-40"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <p className="text-sm leading-6">
        <span className="mr-2">
          <strong className="font-semibold">palettify •</strong> We are going live
          soon! Get notified when launched.
        </span>
        <CollectEmailsModal>
          <Button size="sm" color="primary">
            Join waitlist
          </Button>
        </CollectEmailsModal>
      </p>
      <div className="flex flex-1 justify-end">
        <Button
          variant="text"
          size="icon"
          className="h-7 w-7"
          onClick={() => {
            setDisplayed(false);
          }}
        >
          <span className="sr-only">Dismiss</span>
          <XIcon size={18} aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
};
