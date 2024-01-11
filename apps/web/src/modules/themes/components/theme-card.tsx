"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Color from "color";
import {
  ArrowRightIcon,
  CodepenIcon,
  CopyIcon,
  GithubIcon,
  HeartIcon,
  InstagramIcon,
  LinkedinIcon,
  ScrollArea,
  TwitterIcon,
  VerifiedIcon,
  useToast,
} from "@palettify/ui";
import { cn } from "@palettify/utils";
import logoLaravel from "@/assets/images/logos/laravel.svg";
import logoMirage from "@/assets/images/logos/mirage.svg";
import logoStatamic from "@/assets/images/logos/statamic.svg";
import logoStaticKit from "@/assets/images/logos/statickit.svg";
import logoTransistor from "@/assets/images/logos/transistor.svg";
import logoTuple from "@/assets/images/logos/tuple.svg";
import { ThemeCardMenu } from "./theme-card-menu";

interface Palette {
  background: string;
  foreground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  card: string;
  cardForeground: string;
  muted: string;
  mutedForeground: string;
  border: string;
}

interface ThemeCardProps {
  themeId: string;
  palette: Palette;
  view?: "website" | "placeholder" | "palette";
}

export const ThemeCard = (props: ThemeCardProps) => {
  const { themeId, palette, view = "website" } = props;

  const { background, foreground, primary, secondary, card } = palette;

  const [liked, setLike] = React.useState<boolean>(false);
  const { toast } = useToast();

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    toast({ title: "Color copied successfully", variant: "default" });
  };

  return (
    <div className="group/card hover:bg-card/70 rounded-lg p-2 pt-1 duration-150 hover:shadow">
      <div className="flex items-center justify-between space-x-1 px-1 py-0.5 opacity-100 group-hover/card:opacity-100">
        <Link
          href={`/playground/${themeId}`}
          className="my-1 flex items-center space-x-1 text-sm font-medium opacity-0 duration-150 group-hover/card:opacity-70 group-hover/card:hover:opacity-100"
        >
          <span>playground</span>
          <ArrowRightIcon size={16} />
        </Link>
        <div className="flex-1" />
        <a
          onClick={() => {
            setLike((prev) => !prev);
          }}
          className="flex cursor-pointer items-center space-x-2 opacity-70 duration-150 hover:opacity-100"
        >
          <span
            className={cn("mb-0.5 inline", {
              "text-red-600": liked,
            })}
          >
            {liked ? 1 : 0}
          </span>
          <HeartIcon
            size={15}
            className={cn({
              "fill-red-600 text-red-600": liked,
            })}
          />
        </a>
        <ThemeCardMenu />
      </div>
      {(view === "website" || view === "placeholder") && (
        <ScrollArea
          className="h-[300px] w-full rounded border text-[6px] shadow"
          type="always"
          style={{ background: background, color: foreground }}
        >
          {view === "website" && <WebsitePreview palette={palette} />}
          {view === "placeholder" && <PlaceholderPreview palette={palette} />}
        </ScrollArea>
      )}
      <div className="mt-2 flex w-full space-x-2">
        {[
          { label: "Background", value: background },
          { label: "Primary", value: primary },
          { label: "Secondary", value: secondary },
          { label: "Card", value: card },
        ].map((item, index) => {
          if (!item.value) return null;

          const isHex = item.value.startsWith("#");
          const isDark = isHex ? Color(item.value).isDark() : false;

          return (
            <div
              key={index}
              className={cn(
                "group/palette h-12 w-[1px] grow cursor-pointer overflow-hidden rounded px-2 py-1 shadow duration-300 hover:w-[45%]"
              )}
              onClick={() => {
                handleCopy(item.value as string);
              }}
              style={{ background: item.value }}
            >
              <div
                className={cn(
                  "hidden h-full items-center justify-between text-xs text-black group-hover/palette:flex",
                  {
                    "text-white": isDark,
                  }
                )}
              >
                <div>
                  <p className="font-bold">{item.label}</p>
                  <p className="font-medium">{isHex ? item.value : "gradient"}</p>
                </div>
                <CopyIcon size={18} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface WebsitePreviewProps {
  palette: Palette;
  className?: string;
}

const PreviewWrapper = ({
  background,
  foreground,
  children,
  className,
}: {
  background: string;
  foreground: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <ScrollArea
      className={cn("h-[300px] w-full rounded border text-[6px] shadow", className)}
      type="always"
      style={{ background: background, color: foreground }}
    >
      {children}
    </ScrollArea>
  );
};

export const WebsitePreview = (props: WebsitePreviewProps) => {
  const { palette, className } = props;
  const {
    background,
    foreground,
    primary,
    primaryForeground,
    secondary,
    secondaryForeground,
    card,
    cardForeground,
    mutedForeground,
    border,
  } = palette;

  return (
    <PreviewWrapper background={background} foreground={foreground} className={className}>
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="font-bold">Acme</div>
        <div className="flex items-center space-x-1">
          {["Home", "Pricing", "Blog"].map((item, index) => (
            <span className="opacity-100 hover:opacity-70" key={index}>
              {item}
            </span>
          ))}
        </div>
        <button
          className="w-7 rounded py-[1px] text-[5px]  opacity-100 duration-150 hover:opacity-90"
          style={{ background: primary, color: primaryForeground }}
        >
          Login
        </button>
      </div>
      {/* main */}
      <div className="mx-auto px-4 pb-6">
        {/* Hero */}
        <div className="flex flex-col items-center pt-8">
          <div className="text-center text-sm font-bold">
            Create your website
            <br /> in seconds
          </div>
          {/* CTA */}
          <div className="mt-4 flex justify-center space-x-2 ">
            <button
              className="w-12 rounded py-1 font-medium opacity-100 duration-150 hover:opacity-90"
              style={{ background: primary, color: primaryForeground }}
            >
              Create
            </button>
            <button
              className="w-12 rounded py-1 font-medium opacity-100 shadow duration-150 hover:opacity-90"
              style={{
                background: secondary ?? undefined,
                border: secondary ? undefined : `1px solid ${foreground}`,
                color: secondary ? secondaryForeground : undefined,
              }}
            >
              Star GitHub
            </button>
          </div>
        </div>
        {/* trusted by */}
        <div className="mt-6" style={{ color: mutedForeground }}>
          <div className="mb-1 text-center text-[8px] font-medium">Trusted by</div>
          <ul role="list" className="mx-auto flex max-w-[80%] items-center gap-1">
            {[
              { name: "Transistor", logo: logoTransistor },
              { name: "Tuple", logo: logoTuple },
              { name: "StaticKit", logo: logoStaticKit },
              { name: "Mirage", logo: logoMirage },
              { name: "Laravel", logo: logoLaravel },
              { name: "Statamic", logo: logoStatamic },
            ].map((company) => (
              <li key={company.name} className="flex">
                <Image src={company.logo} alt={company.name} unoptimized />
              </li>
            ))}
          </ul>
        </div>
        {/* features */}
        <div className="mt-4 flex flex-col items-center">
          <div className="text-center text-[10px] font-bold">Awesome features</div>
          <div className="mt-2 grid w-full grid-cols-3 gap-2">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-current">
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                  </svg>
                ),
                title: "Next.js",
                description: "App dir, Routing, Layouts, Loading UI and API routes.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-current">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                  </svg>
                ),
                title: "React 18",
                description: "Server and Client Components. Use hook.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-current">
                    <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
                  </svg>
                ),
                title: "Database",
                description: "ORM using Prisma and deployed on PlanetScale.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-current">
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                  </svg>
                ),
                title: "Components",
                description:
                  "UI components built using Radix UI and styled with Tailwind CSS.",
              },
              {
                title: "Authentication",
                description: "Authentication using NextAuth.js and middlewares.",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="h-2.5 w-2.5 fill-current"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                ),
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-current">
                    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
                  </svg>
                ),
                title: "Subscriptions",
                description: "Free and paid subscriptions using Stripe.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded p-[3px] py-1 shadow"
                style={{ background: card, color: cardForeground }}
              >
                {feature.icon}
                <div className="mt-0.5 font-bold">{feature.title}</div>
                <div className="text-[4px] opacity-90">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
        {/* testimonials */}
        <div className="mt-4">
          <div className="text-center text-[10px] font-bold">What people say</div>
          <div className="mx-auto mt-2 grid w-full max-w-[80%] grid-cols-3 items-center gap-2">
            {[
              {
                content: "Lets conquer the world minions",
                author: {
                  name: "Mehdi BHA",
                  role: "IT guy",
                  avatar: "https://github.com/mehdibha.png",
                  verified: true,
                },
              },
              {
                content:
                  "Awesome. Would be great if we could pick from some pre-built themes!",
                author: {
                  name: "Shadcn",
                  role: "Author of shadcn-ui",
                  verified: true,
                  avatar: "https://github.com/shadcn.png",
                },
              },
              {
                content: "Wow nice but light  theme is amazing🫡.",
                author: {
                  name: "Md Mustaqim Alam",
                  role: "Front-end Developer",
                  avatar: "https://github.com/ahmedbenkhalifa.png",
                  verified: false,
                },
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="rounded p-1 text-[3px] shadow"
                style={{ background: card, color: cardForeground }}
              >
                <p>{testimonial.content}</p>
                <div className="mt-1 flex items-center gap-0.5">
                  <Image
                    className="aspect-square h-2 w-2 rounded-full "
                    width={10}
                    height={10}
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                  />
                  <div className="opacity-90">
                    <p className="flex items-center font-semibold">
                      <span className="mr-0.5">{testimonial.author.name}</span>
                      {testimonial.author.verified && (
                        <VerifiedIcon size={5} color="rgba(29,155,240,1.00)" />
                      )}
                    </p>
                    <p>{testimonial.author.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* CTA */}
        <div className="mt-8">
          <div className="text-center text-[10px] font-bold">Get started for free</div>
          <div
            className="mb-1 text-center text-[7px] font-medium"
            style={{ color: mutedForeground }}
          >
            No credit card required. Cancel anytime.
          </div>
          <button
            className="mx-auto mt-3 block w-12 rounded py-1 font-medium opacity-100 duration-150 hover:opacity-90"
            style={{ background: primary, color: primaryForeground }}
          >
            Playground
          </button>
        </div>
      </div>
      {/* footer */}
      <div
        className="flex items-end justify-between border-t p-2 pb-3"
        style={{ borderColor: border }}
      >
        <div className="text-[5px] font-medium" style={{ color: mutedForeground }}>
          Copyright © 2023 Palletify Inc. All rights reserved.
        </div>
        <div className="flex items-center space-x-1">
          <GithubIcon size={7} />
          <TwitterIcon size={7} />
          <LinkedinIcon size={7} />
          <InstagramIcon size={7} />
          <CodepenIcon size={7} />
        </div>
      </div>
    </PreviewWrapper>
  );
};

export const PlaceholderPreview = (props: WebsitePreviewProps) => {
  const { palette, className } = props;
  const { background, foreground, primary, secondary, card, border } = palette;

  return (
    <PreviewWrapper background={background} foreground={foreground} className={className}>
      {/* Navbar */}
      <div className="flex justify-between px-4 py-2">
        <div className="w-6">
          <div className="h-2 w-4 rounded bg-black" style={{ background: foreground }} />
        </div>
        <div className="flex items-center space-x-1">
          <div className="h-2 w-4 rounded-full" style={{ background: foreground }} />
          <div className="h-2 w-4 rounded-full" style={{ background: foreground }} />
          <div className="h-2 w-4 rounded-full" style={{ background: foreground }} />
        </div>
        <div className="h-2 w-6 rounded" style={{ background: primary }} />
      </div>
      {/* main */}
      <div className="mx-auto px-4 pb-6">
        {/* Hero */}
        <div className="flex flex-col items-center pt-8">
          <div className="h-2 w-[120px] rounded" style={{ background: foreground }} />
          <div className="mt-1 h-2 w-[60px] rounded" style={{ background: foreground }} />
          {/* CTA */}
          <div className="mt-4 flex justify-center space-x-2">
            <div className="h-3 w-8 rounded" style={{ background: primary }} />
            <div className="h-3 w-8 rounded" style={{ background: secondary }} />
          </div>
        </div>
        {/* trusted by */}
        <div className="mt-6 flex flex-col items-center">
          <div className="h-1 w-[40px] rounded" style={{ background: foreground }} />
          <div className="mt-1 flex justify-center space-x-1">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-4 rounded-full"
                  style={{ background: foreground }}
                />
              ))}
          </div>
        </div>
        {/* features */}
        <div className="mt-4 flex flex-col items-center">
          <div className="mt-1 h-2 w-[40px] rounded" style={{ background: foreground }} />
          <div className="mt-2 grid w-full grid-cols-3 gap-2">
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-5 rounded border shadow-sm"
                  style={{ background: card, borderColor: border }}
                />
              ))}
          </div>
        </div>
        {/* testimonials */}
        <div className="mt-4 flex flex-col items-center">
          <div className="mt-1 h-2 w-[70px] rounded" style={{ background: foreground }} />
          <div className="mt-2 grid w-full grid-cols-4 gap-2">
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-8 rounded border shadow-sm"
                  style={{ background: card, borderColor: border }}
                />
              ))}
          </div>
        </div>
        {/* CTA */}
        <div className="mt-8 flex flex-col items-center">
          <div className="h-3 w-[50px] rounded-full" style={{ background: foreground }} />
          <div className="mt-1 h-2 w-[70px] rounded" style={{ background: foreground }} />
          <div className="mt-2 h-3 w-8 rounded" style={{ background: primary }} />
        </div>
      </div>
      {/* footer */}
      <div
        className="flex justify-between border-t px-2 py-2"
        style={{ borderColor: border }}
      >
        <div className="h-2 w-[70px] rounded" style={{ background: foreground }} />
        <div className="flex items-center space-x-1">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="h-2 w-2 rounded-[3px]"
                style={{ background: foreground }}
              />
            ))}
        </div>
      </div>
    </PreviewWrapper>
  );
};
