import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

async function getPost(postSlug: string) {
  return {
    post: null
  }
}

export async function generateStaticParams() {
  // TODO: fix this

  return []
}

interface PostPageProps {
  params: {
    postSlug: string;
  };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { post } = await getPost(params.postSlug);

  // if (!post) {
  //   return {};
  // }

  return {
    title: "post.title",
    openGraph: {
      images: "post?.thumbnail ? [post.thumbnail] : undefined",
    },
  };
}

const PostPage = async (props: PostPageProps) => {
  const { params } = props;
  const { postSlug } = params;
  const { post } = await getPost(postSlug);

  if (!post) notFound();

  return (
    <div className="mt-20">
      {/* <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
      <div className="flex items-center space-x-2">
        <p>Published in {formatDate(post.createdTime)}</p>
        <p>•</p>
        <p>3 min read</p>
        <p>•</p>
        <div className="flex space-x-1">
          {post.tags && post.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
        </div>
      </div> */}
      <div className="mt-12">
        {/* TODO: post here */}
      </div>
    </div>
  );
};

export default PostPage;
