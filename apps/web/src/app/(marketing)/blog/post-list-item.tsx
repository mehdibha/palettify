"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@palettify/ui";
import { cn, formatDate } from "@palettify/utils";

interface PostListItemProps {
  href: string;
  title: string;
  createdTime: string;
  timeToRead: number;
  summary?: string;
  tags?: string[];
  thumbnail?: string;
}

export const PostListItem = (props: PostListItemProps) => {
  const { href, title, createdTime, timeToRead, summary, tags, thumbnail } = props;

  return (
    <Link href={href}>
      <li className="group relative cursor-pointer">
        {/* background */}
        <div className="absolute left-0 top-0 z-0 h-full w-full rounded-xl border bg-[rgba(50,50,50,0.1)] opacity-50 shadow-md transition-all duration-300 group-hover:opacity-100 dark:bg-[rgba(230,230,230,0.1)] dark:from-transparent dark:via-transparent dark:to-transparent" />
        {/* content */}
        <div className="flex space-x-2 p-4 sm:flex-row md:p-6">
          <div className="w-full">
            <div className="mb-1 flex space-x-1">
              <div>
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="mb-2 text-sm text-gray-400">
                  Published on {formatDate(createdTime)} • {timeToRead} min read
                </p>
              </div>
              {thumbnail && (
                <CoverImage src={thumbnail} className="block sm:hidden" alt={title} />
              )}
            </div>
            <p className="mb-3 text-sm">{summary}</p>
            <div className="flex flex-wrap gap-2">
              {tags &&
                tags.map((tag) => (
                  <Badge variant="outlined" key={tag}>
                    {tag}
                  </Badge>
                ))}
            </div>
          </div>
          {thumbnail && (
            <CoverImage src={thumbnail} className="hidden sm:block" alt={title} />
          )}
        </div>
      </li>
    </Link>
  );
};

interface CoverImageProps {
  src: string;
  alt: string;
  className: string;
}

const CoverImage = (props: CoverImageProps) => {
  const { src, alt, className } = props;
  return (
    <Image
      src={src}
      width={112}
      height={112}
      loading="lazy"
      className={cn(
        "aspect-[auto 112 / 112] h-[80px] w-[80px] rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30 sm:h-[112px] sm:w-[112px]",
        className
      )}
      alt={alt}
    />
  );
};
