import React from "react";
import { Button } from "@palettify/ui";
import { stringReplace } from "@palettify/utils";

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

export const Hero = (props: HeroProps) => {
  const { headline, subheadline, cta, demoVideo } = props;
  return (
    <section className="px-6">
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
      {demoVideo?.src && (
        <div className="container mt-20 max-w-4xl">
          <div className="aspect-video overflow-hidden rounded-3xl border bg-slate-800 shadow-xl ">
            <video muted autoPlay loop playsInline src={demoVideo.src} />
          </div>
        </div>
      )}
    </section>
  );
};
