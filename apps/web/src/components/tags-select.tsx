"use client";

import React from "react";
import { Badge } from "@palettify/ui";
import { cn } from "@palettify/utils";

interface TagsSelectProps {
  tags: string[];
  selectedTags: string[];
  handleTagClick: (tag: string) => void;
  className?: string;
}

export const TagsSelect = (props: TagsSelectProps) => {
  const { tags, selectedTags, handleTagClick, className } = props;

  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {tags.map((tag) => {
        const selected = selectedTags.findIndex((elem) => elem === tag) > -1;
        const onClick = () => {
          handleTagClick(tag);
        };

        return (
          <Badge
            onClick={onClick}
            key={tag}
            className={cn(
              "focus-ring cursor-pointer px-4 py-2 transition-all duration-300",
              {
                "hover:ring-primary ring": selected,
                "opacity-50": !selected && selectedTags.length > 0,
              }
            )}
          >
            {tag}
          </Badge>
        );
      })}
    </div>
  );
};
