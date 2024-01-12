import React from "react";
import Link from "next/link";
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
      <h1 className="font-display text-center text-4xl md:text-5xl lg:text-6xl">
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
      <div className="flex justify-center">
        <Link
          href="https://www.producthunt.com/posts/palettify?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-palettify"
          target="_blank"
          className="mt-8"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=434268&theme=light"
            alt="Palettify - Never&#0032;struggle&#0032;again&#0032;with&#0032;your&#0032;site&#0032;theme | Product Hunt"
            style={{ width: "250px", height: "54px" }}
            width="250"
            height="54"
          />
        </Link>
      </div>
      <div className="mx-auto mt-20 flex max-w-[1000px] flex-wrap justify-center gap-2">
        {Array(84)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={cn(
                "animate-in direction-alternate-reverse zoom-in-50 repeat-infinite fade-in-25 duration-1500 h-7 w-7 rounded",
                {
                  "bg-red-400": index % 32 === 0,
                  "bg-red-400 delay-100": index % 32 === 1,
                  "bg-red-400 delay-200": index % 32 === 2,
                  "bg-red-500 delay-300": index % 32 === 3,
                  "delay-400 bg-red-600": index % 32 === 4,
                  "bg-red-700 delay-500": index % 32 === 5,
                  "delay-600 bg-orange-600": index % 32 === 6,
                  "delay-600 bg-orange-500": index % 32 === 7,
                  "delay-800 bg-amber-500": index % 32 === 8,
                  "delay-900 bg-amber-500": index % 32 === 9,
                  "bg-yellow-500 delay-1000": index % 32 === 10,
                  "delay-1100 bg-yellow-500": index % 32 === 11,
                  "delay-1200 bg-lime-500": index % 32 === 12,
                  "delay-1300 bg-lime-500": index % 32 === 13,
                  "delay-1400 bg-green-500": index % 32 === 14,
                  "delay-1500 bg-green-600": index % 32 === 15,
                  "delay-1600 bg-emerald-500": index % 32 === 16,
                  "delay-1700 bg-emerald-500": index % 32 === 17,
                  "delay-1800 bg-teal-500": index % 32 === 18,
                  "delay-1900 bg-teal-500": index % 32 === 19,
                  "delay-2000 bg-cyan-500": index % 32 === 20,
                  "delay-2100 bg-cyan-500": index % 32 === 21,
                  "delay-2200 bg-sky-500": index % 32 === 22,
                  "delay-2300 bg-sky-500": index % 32 === 23,
                  "delay-2400 bg-blue-500": index % 32 === 24,
                  "delay-2500 bg-indigo-500": index % 32 === 25,
                  "delay-2600 bg-violet-500": index % 32 === 26,
                  "delay-2700 bg-purple-500": index % 32 === 27,
                  "delay-2800 bg-fuchsia-600": index % 32 === 28,
                  "delay-2900 bg-pink-500": index % 32 === 29,
                  "delay-3000 bg-rose-400": index % 32 === 30,
                  "delay-3100 bg-rose-400": index % 32 === 31,
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
