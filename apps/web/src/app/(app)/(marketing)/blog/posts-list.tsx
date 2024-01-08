import React from "react";
import { Post } from "@/types";
import { PostListItem } from "./post-list-item";

interface PostsListProps {
  posts: Post[];
}

export const PostsList = (props: PostsListProps) => {
  const { posts } = props;
  return (
    <ul className="flex flex-col space-y-4">
      {posts.map((post) => (
        <PostListItem
          key={post.slug}
          href={`/blog/${post.slug}`}
          title={post.metadata.title}
          createdTime={post.metadata.publishedAt}
          timeToRead={4}
          summary={post.metadata.summary}
          thumbnail={post.metadata.thumbnail}
          tags={post.metadata.keywords}
        />
      ))}
    </ul>
  );
};
