import { notFound } from "next/navigation";
import { Badge } from "@palettify/ui";
import { formatDate } from "@palettify/utils";
import { MDX } from "@/components/mdx";
import { getPostBySlug } from "@/lib/posts";

interface PostPageProps {
  params: {
    postSlug: string;
  };
}

export default async function PostPage(props: PostPageProps) {
  const { params } = props;
  const post = getPostBySlug(params.postSlug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mt-20">
      <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
        {post.metadata.title}
      </h1>
      <div className="flex flex-wrap items-center gap-2">
        <p>Published in {formatDate(post.metadata.publishedAt)}</p>
        <span>•</span>
        <p>{post.timeToRead} min read</p>
        <span>•</span>
        {post.metadata.keywords &&
          post.metadata.keywords.map((tag) => <Badge key={tag}>{tag}</Badge>)}
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert prose-lead:leading-none mt-20 max-w-full">
        {post.content && <MDX source={post.content} />}
      </article>
    </div>
  );
}
