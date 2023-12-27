import { CallToAction } from "@/components/call-to-action";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { siteConfig } from "@/config";

export default function HomePage() {
  return (
    <div className="animate-in fade-in slide-in-from-top-6 pt-28 duration-500">
      <Hero
        headline={siteConfig.homePage.hero.headline}
        subheadline={siteConfig.homePage.hero.subheadline}
        cta={siteConfig.homePage.hero.cta}
        demoVideo={siteConfig.homePage.hero.demoVideo}
        companies={siteConfig.homePage.hero.companies}
      />
      <Features className="mt-40" features={siteConfig.homePage.features.features} />
      <Testimonials
        headline={siteConfig.homePage.testimonial.headline}
        subheadline={siteConfig.homePage.testimonial.subheadline}
        testimonials={siteConfig.homePage.testimonial.testimonials}
      />
      <CallToAction
        className="mt-10"
        headline={siteConfig.homePage.cta.headline}
        subheadline={siteConfig.homePage.cta.subheadline}
        logo={false}
        cta={siteConfig.homePage.cta.cta}
      />
    </div>
  );
}
