import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CallToAction } from "@/components/call-to-action";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { siteConfig } from "@/config";

interface PostLayoutProps {
  params: {
    postSlug: string;
  };
  children: React.ReactNode;
}

const config = siteConfig.pricingPage;

export async function generateMetadata({ params }: PostLayoutProps): Promise<Metadata> {
  const post = getPostBySlug(params.postSlug);
  if (!post) {
    notFound();
  }
  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    keywords: post.metadata.keywords,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.summary,
      images: post.metadata.thumbnail ? [post.metadata.thumbnail] : undefined,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    postSlug: post.slug,
  }));
}

const PostLayout = (props: PostLayoutProps) => {
  const { children } = props;
  return (
    <div className="container max-w-4xl">
      {children}
      <CallToAction
        className="mt-32"
        logo={false}
        headline={config.cta.headline}
        subheadline={config.cta.subheadline}
        cta={config.cta.cta}
      />
    </div>
  );
};

export default PostLayout;
