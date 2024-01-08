import { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
// import { getBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/config";
import { PostsExplorer } from "./posts-explorer";

const config = siteConfig.blogPage;

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container max-w-7xl pt-12">
      <h1 className="font-display max-w-2xl text-3xl font-semibold sm:text-4xl md:text-5xl">
        {config.headline}
      </h1>
      <p className="text-muted-foreground mt-2 text-lg">{config.subheadline}</p>
      <PostsExplorer posts={posts} />
    </div>
  );
}
