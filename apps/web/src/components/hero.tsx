import React from "react";
import { Button } from "@palettify/ui";
import { cn, stringReplace } from "@palettify/utils";
import styles from "./styles.module.css";

type company = {
  name: string;
  logo: any;
};

interface HeroProps {
  headline: string;
  subheadline: string;
  cta: {
    label: string;
    href: string;
  }[];
  demoVideo: {
    src: string | null;
  };
}

const rainbowColors = [
  "red-500",
  "orange-500",
  "yellow-500",
  "green-500",
  "blue-500",
  "indigo-500",
  "purple-500",
];

export const Hero = (props: HeroProps) => {
  const { headline, subheadline, cta, demoVideo } = props;
  return (
    <section className="relative px-6">
      <h1 className="font-display text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        {headline.split("\n").map((line, index) => (
          <span key={index}>
            {stringReplace(line, /\*\*(.*?)\*\*/g, (match, index) => (
              <span key={index} className="word-animation">
                {match}
              </span>
            ))}
            <br />
          </span>
        ))}
      </h1>
      <h2 className="text-md mx-auto mb-8 mt-6 max-w-4xl text-center md:text-lg lg:text-xl">
        {subheadline}
      </h2>
      <div className="flex justify-center space-x-2 sm:space-x-4">
        {cta[0] && (
          <Button href={cta[0].href} size="lg" color="primary">
            {cta[0].label}
          </Button>
        )}
        {cta[1] && (
          <Button href={cta[1].href} size="lg" variant="outlined" color="neutral">
            {cta[1].label}
          </Button>
        )}
      </div>
      <div className="mx-auto mt-20 flex max-w-[800px] flex-wrap justify-center gap-2">
        {Array(44)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={cn(
                "animate-in direction-alternate-reverse zoom-in-50 repeat-infinite fade-in-25 duration-1500 h-7 w-7 rounded",
                {
                  "bg-slate-500 ": index % 22 === 0,
                  "bg-gray-500 delay-100": index % 22 === 1,
                  "bg-zinc-500 delay-200": index % 22 === 2,
                  "bg-neutral-500 delay-300": index % 22 === 3,
                  "delay-400 bg-stone-500": index % 22 === 4,
                  "bg-red-500 delay-500": index % 22 === 5,
                  "delay-600 bg-orange-500": index % 22 === 6,
                  "bg-amber-500 delay-700": index % 22 === 7,
                  "delay-800 bg-yellow-500": index % 22 === 8,
                  "delay-900 bg-lime-500": index % 22 === 9,
                  "bg-green-500 delay-1000": index % 22 === 10,
                  "delay-1100 bg-emerald-500": index % 22 === 11,
                  "delay-1200 bg-teal-500": index % 22 === 12,
                  "delay-1300 bg-cyan-500": index % 22 === 13,
                  "delay-1400 bg-sky-500": index % 22 === 14,
                  "delay-1500 bg-blue-500": index % 22 === 15,
                  "delay-1600 bg-indigo-500": index % 22 === 16,
                  "delay-1700 bg-violet-500": index % 22 === 17,
                  "delay-1800 bg-purple-500": index % 22 === 18,
                  "delay-1900 bg-fuchsia-500": index % 22 === 19,
                  "delay-2200 bg-pink-500": index % 22 === 20,
                  "delay-2300 bg-rose-500": index % 22 === 21,
                }
              )}
            />
          ))}
      </div>
      {demoVideo?.src && (
        <div className="container mt-20 max-w-4xl">
          <div className="aspect-video overflow-hidden rounded-3xl border bg-slate-800 shadow-xl">
            <video muted autoPlay loop playsInline src={demoVideo.src} />
          </div>
        </div>
      )}
    </section>
  );
};
