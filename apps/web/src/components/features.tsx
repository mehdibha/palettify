import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, Badge, Button } from "@palettify/ui";
import { cn, stringReplace } from "@palettify/utils";

interface FeaturesProps {
  className?: string;
  headline: string;
  features: {
    title: string;
    description: string;
    image?: string;
    cta: {
      label: string;
      href: string;
    };
    soon?: boolean;
  }[];
}

export const Features = (props: FeaturesProps) => {
  const { headline, features, className } = props;
  return (
    <section className={cn("container", className)}>
      <h2 className="font-display text-center text-4xl lg:text-5xl">
        {stringReplace(headline, /\*\*(.*?)\*\*/g, (match, index) => (
          <span key={index} className="word-animation">
            {match}
          </span>
        ))}
      </h2>
      <div className="mt-12 flex justify-center">
        <div className="grid grid-cols-2 justify-center gap-10">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              cta={feature.cta}
              soon={feature.soon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  title: string;
  description: string;
  image?: string;
  cta: {
    label: string;
    href: string;
  };
  soon?: boolean;
}

const Feature = (props: FeatureProps) => {
  const { title, description, cta, image, soon = false } = props;
  return (
    <div className="relative flex flex-col items-center rounded-3xl border p-10">
      {soon && (
        <Badge className="absolute right-3 top-3" color="primary">
          soon
        </Badge>
      )}
      {image && (
        <Image
          alt="feature"
          height={100}
          width={100}
          src={image}
          className="object-contain"
        />
      )}
      <div className="mt-8">
        <h2 className="font-display text-3xl font-bold">{title}</h2>
        <p className="text-muted-foreground mt-4 text-lg">{description}</p>
        <div className="mt-4 flex justify-end">
          <Button
            disabled={soon}
            size="sm"
            variant="text"
            href={cta.href}
            className="font-bold"
          >
            <span className="mr-1">{cta.label}</span>
            <span>
              <ArrowRightIcon size={16} className="relative top-[2px]" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
