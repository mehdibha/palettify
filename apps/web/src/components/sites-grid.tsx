"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@palettify/ui";
import { TagsSelect } from "./tags-select";

interface SitesGridProps {
  sites: {
    id?: string;
    name: string;
    description?: string;
    image?: string | null;
    tags: string[];
    href?: string | null;
  }[];
  tags: string[];
}

export const SitesGrid = (props: SitesGridProps) => {
  const { sites, tags } = props;
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    const selected = selectedTags.findIndex((elem) => elem === tag) > -1;
    if (selected) {
      setSelectedTags(selectedTags.filter((elem) => elem !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredSites = React.useMemo(() => {
    return sites.filter((site) => {
      let matchesTags = site.tags
        ? site.tags.some((tag) => selectedTags.includes(tag))
        : false;
      if (selectedTags.length === 0) matchesTags = true;
      return matchesTags;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTags]);

  return (
    <div className="mt-12">
      <TagsSelect
        tags={tags}
        selectedTags={selectedTags}
        handleTagClick={handleTagClick}
      />
      <div className="mt-8 grid grid-cols-12 gap-6">
        {filteredSites.map((site, index) => (
          <CardWrapper
            href={site.href}
            key={index}
            className="bg-card col-span-12 cursor-pointer overflow-hidden rounded-xl border border-gray-300 shadow-md transition-all hover:border-gray-400 hover:opacity-80 hover:shadow-lg dark:border-gray-700 dark:hover:border-gray-600 sm:col-span-6 md:col-span-4 lg:col-span-3"
          >
            <div className="relative flex h-[200px] items-center justify-center overflow-hidden bg-gray-600">
              {site.image && (
                <>
                  <Image
                    src={site.image}
                    alt={site.name}
                    fill
                    className="absolute scale-125 object-cover opacity-95 blur-lg"
                  />
                  <div className="relative z-[10] m-4 h-[70%] w-full">
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      className="rounded-xl object-cover shadow-md"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{site.name}</h3>
              {site.description && (
                <p className="text-muted-foreground">{site.description}</p>
              )}
              <div className="mt-2 flex gap-2">
                {site.tags.map((tag, index) => (
                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>
            </div>
          </CardWrapper>
        ))}
      </div>
    </div>
  );
};

interface CardWrapperProps {
  className: string;
  href?: string | null;
  children?: React.ReactNode;
}

const CardWrapper = (props: CardWrapperProps) => {
  const { href, className, children } = props;
  if (href) {
    return (
      <Link href={href} target="_blank" className={className}>
        {children}
      </Link>
    );
  } else {
    return <div className={className}>{children}</div>;
  }
};
