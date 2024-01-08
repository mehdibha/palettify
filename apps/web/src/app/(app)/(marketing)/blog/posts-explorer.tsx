"use client";

import React from "react";
import { getAllTags } from "@palettify/utils";
import { TagsSelect } from "@/components/tags-select";
import { Post } from "@/types";
import { PostsList } from "./posts-list";

interface PostsExplorerProps {
  posts: Post[];
  className?: string;
}

export const PostsExplorer = (props: PostsExplorerProps) => {
  const { posts, className } = props;

  const tags = getAllTags(posts.map((post) => ({ tags: post.metadata.keywords })));
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    const selected = selectedTags.findIndex((elem) => elem === tag) > -1;
    if (selected) {
      setSelectedTags(selectedTags.filter((elem) => elem !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredPosts = React.useMemo(() => {
    return posts.filter((post: Post) => {
      let matchesTags = post.metadata.keywords
        ? post.metadata.keywords.some((tag) => selectedTags.includes(tag))
        : false;
      if (selectedTags.length === 0) matchesTags = true;
      return matchesTags;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTags]);

  return (
    <div className={className}>
      <h2 className="mb-2 mt-4 text-xl font-bold">Search blog by topics</h2>
      <TagsSelect
        className="mb-6"
        tags={tags}
        selectedTags={selectedTags}
        handleTagClick={handleTagClick}
      />
      {filteredPosts && <PostsList posts={filteredPosts} />}
    </div>
  );
};
