import { APP_URL } from "./constants";

export const siteConfig = {
  global: {
    url: "https://palettify.co",
    name: "Palettify",
    logo: "/images/logo.png",
    title: "palettify | A monorepo starter to speed up your development",
    description:
      "Turbocharge your project with this monorepo starter. It comes with Next.js, Tailwind CSS, Shadcn-ui, Server components, and more.",
    keywords: ["Next.js", "React", "Tailwind CSS", "Shadcn-ui", "Server components"],
    authors: [
      {
        name: "mehdibha",
        url: "https://www.mehdibha.com",
      },
    ],
    creator: "mehdibha",
    thumbnail: "/images/og-image.png",
    twitter: {
      creator: "@mehdibha_",
    },
  },
  header: {
    nav: {
      links: [
        { href: "/palettes", label: "Palettes" },
        { href: "/blog", label: "Blog" },
      ],
    },
    cta: {
      primary: {
        label: "Playground",
        href: "/playground",
      },
      secondary: {
        label: "Sign in",
        href: "/login",
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
      headline: "Get an instant **preview**\n for your theme",
      subheadline:
        "Get an instant preview for your theme with palettify. Export your theme in one click.",
      cta: [
        { label: "Go to playground", href: "/playground" },
        { label: "Star on GitHub", href: "https://github.com/mehdibha/palettify" },
      ],
      demoVideo: {
        src: null,
      },
    },
    features: {
      headline: "supported laibriaries",
      features: [
        {
          title: "MUI",
          description: "Discover our theme previewer for MUI",
          image: "https://mui.com/static/logo.svg",
          cta: {
            label: "Go to playground",
            href: "/playground?librairy=mui",
          },
        },
        {
          title: "shadcn-ui",
          description: "Discover our theme previewer for shadcn",
          image: "/images/shadcn.svg",
          cta: {
            label: "Go to playground",
            href: "/playground?librairy=shadcn",
          },
        },
      ],
    },
    testimonial: {
      headline: "Our community **loves** us",
      subheadline: "",
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
      headline: "Proudly **open source**",
      subheadline: "palettify is open source and available on GitHub",
      cta: {
        label: "GitHub Repo",
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
          "Free hosting on 'palettify.co'",
          "Optimized SEO",
          "Has 'Built with palettify' branding",
        ],
      },
      {
        featured: true,
        name: "Pro",
        price: { monthly: "$19", yearly: "$15" },
        billing: "per month",
        description: "Perfect for small / medium sized businesses.",
        href: APP_URL,
        features: [
          "Everything in Free.",
          "Basic analytics",
          "Remove 'Built with palettify' branding",
        ],
      },
      {
        name: "Entreprise",
        price: { monthly: "$39", yearly: "$31" },
        billing: "per month",
        description: "For even the biggest enterprise companies.",
        href: APP_URL,
        features: [
          "Everything in Personal site.",
          "Advanced analytics",
          "Priority support",
        ],
      },
    ],
    faq: [
      {
        question: "How does palettify works?",
        answer:
          "palettify is a monorepo starter that comes with Next.js, Tailwind CSS, Shadcn-ui, Server components, and more. It's a great way to start your next project.",
      },
      {
        question: "How do I create a website with palettify?",
        answer: "You can create a website with palettify by following the documentation.",
      },
      {
        question: "How much does palettify cost?",
        answer: "It's free to use palettify",
      },
      {
        question: "Can I use palettify for free?",
        answer: "Yes, you can use palettify for free.",
      },
    ],
    cta: {
      headline: "Proudly **open-source**",
      subheadline: "palettify is open source and available on GitHub",
      cta: { label: "Star on GitHub", href: "https://github.com/mehdibha/palettify" },
    },
  },
  blogPage: {
    headline: "Blog",
    subheadline: "Learn more about palettify and write your posts with MDX.",
  },
};
