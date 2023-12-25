import NextLogo from "@/assets/images/companies/next-js";
import PioneerLogo from "@/assets/images/companies/pioneer";
import PrismaLogo from "@/assets/images/companies/prisma";
import VercelLogo from "@/assets/images/companies/vercel";
import YCombinatorLogo from "@/assets/images/companies/y-combinator";
import { APP_URL } from "./constants";

export const siteConfig = {
  global: {
    url: "https://palettify.mehdibha.com",
    name: "palettify",
    logo: "/images/logo.png",
    title: "palettify | A monorepo starter to speed up your development",
    description:
      "Turbocharge your project with this monorepo starter. It comes with Next.js, Tailwind CSS, Shadcn-ui, Server components, and more.",
    keywords: ["Next.js", "React","Tailwind CSS","Shadcn-ui","Server components"],
    authors: [
      {
        name: "mehdibha",
        url: "https://www.mehdibha.com",
      },
    ],
    creator: "mehdibha",
    thumbnail: "/images/thumbnail.png",
    twitter: {
      creator: "@mehdibha_",
    },
  },
  header: {
    nav: {
      links: [
        { href: "/pricing", label: "Pricing" },
        { href: "/blog", label: "Blog" },
      ],
    },
    cta: {
      primary: {
        label: "Get palettify",
        href: APP_URL,
      },
      secondary: {
        label: "Sign in",
        href: APP_URL,
      },
    },
  },
  footer: {
    socialLinks: {
      twitter: "https://twitter.com/mehdibha_",
      instagram: "https://instagram.com/mehdibha",
      github: "https://github.com/mehdibha",
      linkedin: "https://www.linkedin.com/mehdibha",
      mail: "mailto:hello@mehdibha.com",
      codepen: null,
    },
  },
  homePage: {
    hero: {
      headline: "A **monorepo starter** to speed up\n your development",
      subheadline:
        "Turbocharge your project with this monorepo starter. It comes with Next.js, Tailwind CSS, Shadcn-ui, Server components, and more.",
      cta: [
        { label: "Go To App", href: APP_URL },
        { label: "Github Repo", href: "https://github.com/mehdibha/palettify" },
      ],
      demoVideo: {
        src: null,
      },
      companies: [
        { name: "Vercel", logo: VercelLogo },
        { name: "Pioneer", logo: PioneerLogo },
        { name: "Y Combinator", logo: YCombinatorLogo },
        { name: "Next.js", logo: NextLogo },
        { name: "Prisma", logo: PrismaLogo },
      ],
    },
    features: {
      features: [
        {
          title: "Next.js",
          description:
            "Explore the latest Next.js 14 features: App dir, Routing, Layouts, Loading UI, API routes, Server components, Server actions, and more.",
          // image: "/images/features/feature03.png",
          cta: {
            label: "See more",
            href: "https://github.com/mehdibha/palettify",
          },
        },
        {
          title: "Stripe",
          description:
            "Integration with Stripe Checkout and the Stripe customer portal, Automatic syncing of pricing plans and subscription statuses via Stripe webhooks",
          // image: "/images/features/feature02.png",
          cta: {
            label: "See more",
            href: "https://github.com/mehdibha/palettify",
          },
        },
        {
          title: "SEO",
          description:
            "SEO friendly, support for meta tags, sitemap.xml, robots.txt, canonical URLs, and automatic JSON-LD schema generation, and more.",
          // image: "/images/features/feature01.png",
          cta: {
            label: "See more",
            href: "https://github.com/mehdibha/palettify",
          },
        },
      ],
    },
    testimonial: {
      headline: "Our community **loves** us",
      subheadline:
        "",
      testimonials: [
        {
          content:
            "Consectetur adipiscing elit. Sed euismod, diam quis accumsan fermentum, odio nibh ultricies od. diam quis accumsan fermentum, odio nibh ultricies odio. ut odio. fusce nec diam et dolor efficitur aliquam.",
          href: "https://www.ahmedbk.com",
          author: {
            name: "Ahmed BK",
            role: "Sr front-end developer at ispoke.to",
            avatar: "https://github.com/ahmedbenkhalifa.png",
          },
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan fermentum, odio nibh ultricies od. ut odio. fusce nec diam et dolor efficitur aliquam. aenean euismod, diam quis accumsan fermentum, odio nibh ultricies odio, ut odio. fusce nec diam et dolor efficitur aliquam. aenean euismod. ",
          href: "https://figitma.com",
          author: {
            name: "Hamza Bouissa",
            role: "Founder of Figitma",
            avatar: "https://github.com/hamzabouissi.png",
          },
        },
        {
          content:
            "Sed euismod, diam quis accumsan fermentum, odio nibh ultricies od. Dielit. Sed euismod, diam quis accumsan fermentum, odio nibh ultricies od. ut odio. fusce nec diam et dolor efficitur aliquam. aenean euismod, diam quis accumsan.",
          href: "https://www.iyed.dev",
          author: {
            name: "Iyed",
            role: "Passionate developer",
            avatar:
              "https://www.iyed.dev/_next/image?url=%2Fimages%2Favatar.png&w=256&q=75",
          },
        },
      ],
    },
    cta: {
      headline: "proudly **open source**",
      subheadline: "palettify is open source and available on github",
      cta: {
        label: "Github Repo",
        href: "https://github.com/mehdibha/palettify",
      },
    },
  },
  pricingPage: {
    headline: "Simple pricing.",
    subheadline:
      "Use palettify for free. Upgrade to enable custom domains and more advanced features.",
    pricingPlans: [
      {
        name: "Free",
        price: { monthly: "$0", yearly: "$0" },
        description: "Good for getting started.",
        href: APP_URL,
        features: [
          "Free hosting on 'notionfol.io'",
          "Choose any template",
          "Customer support",
          "Optimized SEO",
          "Has 'Built with Notionfol.io' branding",
        ],
      },
      {
        featured: true,
        name: "Personal site",
        price: { monthly: "$19", yearly: "$15" },
        billing: "per site / month",
        description: "Perfect for small / medium sized businesses.",
        href: APP_URL,
        features: [
          "Everything in Free.",
          "Connect to your custom domain",
          "Basic analytics",
          "Remove 'Built with Notionfol.io' branding",
        ],
      },
      {
        name: "Pro site",
        price: { monthly: "$39", yearly: "$31" },
        billing: "per site / month",
        description: "For even the biggest enterprise companies.",
        href: APP_URL,
        features: [
          "Everything in Personal site.",
          "Manual publishing controls",
          "Advanced analytics",
          "Priority support",
        ],
      },
    ],
    faq: [
      {
        question: "How does palettify works?",
        answer: <p></p>,
      },
      {
        question: "What is Notion?",
        answer: <p></p>,
      },
      {
        question: "Can I create a website without code?",
        answer: <p></p>,
      },
      {
        question: "How many sites can I have?",
        answer: <p></p>,
      },
      {
        question: "How do I create a website with palettify?",
        answer: <p></p>,
      },
      {
        question: "How much does palettify cost?",
        answer: <p></p>,
      },
      {
        question: "Can I use palettify for free?",
        answer: <p></p>,
      },
    ],
    cta: {
      headline: "Get started for **free**",
      subheadline: "No credit card required. Cancel anytime.",
      cta: {
        label: "Try Notionfol.io free",
        href: APP_URL,
      },
    },
  },
  blogPage: {
    headline: "Blog",
    subheadline:
      "Learn more about palettify and write your posts with MDX.",
  },
};
