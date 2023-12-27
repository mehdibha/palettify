import path from "path";
import { Post } from "@/types";
import { getMDXData } from "./content";

export const getAllPosts = () => {
  const posts = getMDXData(path.join(process.cwd(), "content", "posts"), {
    content: false,
  });
  return posts as Post[];
};

export const getPostBySlug = (slug: string) => {
  const posts = getMDXData(path.join(process.cwd(), "content", "posts"), {
    content: true,
  });
  return posts.find((post) => post.slug === slug) as Post | undefined;
};
