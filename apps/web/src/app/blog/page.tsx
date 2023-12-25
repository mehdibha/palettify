import { Metadata } from "next";
import { siteConfig } from "@/config";

const config = siteConfig.blogPage;

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogPage() {

  return (
    <div className="container max-w-7xl pt-12">
      <h1 className="font-display max-w-2xl text-3xl font-semibold sm:text-4xl md:text-5xl">
        {config.headline}
      </h1>
      <p className="text-muted-foreground mt-2 text-lg">{config.subheadline}</p>
    </div>
  );
}
