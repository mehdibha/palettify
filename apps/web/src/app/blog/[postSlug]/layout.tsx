import React from "react";
import { CallToAction } from "@/components/call-to-action";
import { siteConfig } from "@/config";

interface PostLayoutProps {
  children: React.ReactNode;
}

const config = siteConfig.pricingPage;

const PostLayout = (props: PostLayoutProps) => {
  const { children } = props;
  return (
    <div className="container max-w-4xl">
      {children}
      <CallToAction
        className="mb-24 mt-36"
        logo={false}
        headline={config.cta.headline}
        subheadline={config.cta.subheadline}
        cta={config.cta.cta}
      />
    </div>
  );
};

export default PostLayout;
