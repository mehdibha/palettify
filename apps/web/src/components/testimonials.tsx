import Image from "next/image";
import Link from "next/link";
import { BadgeCheckIcon, VerifiedIcon } from "@palettify/ui";
import { cn, stringReplace } from "@palettify/utils";

interface TestimonialProps {
  headline: string;
  subheadline: string;
  testimonials: {
    content: string;
    author: {
      name: string;
      role: string;
      avatar: string;
    };
    href: string;
  }[];
}

export function Testimonials(props: TestimonialProps) {
  const { headline, subheadline, testimonials } = props;
  return (
    <section className="container py-20 sm:py-32">
      <h2 className="font-display text-center text-4xl lg:text-5xl">
        {stringReplace(headline, /\*\*(.*?)\*\*/g, (match, index) => (
          <span key={index} className="word-animation">
            {match}
          </span>
        ))}
      </h2>
      <p className="text-muted-foreground mx-auto mt-4 max-w-4xl text-lg">
        {subheadline}
      </p>
      <div className="mt-16 flex flex-wrap items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <Link
            key={index}
            href={testimonial.href}
            target="_blank"
            className={cn(
              "bg-card/40 hover:bg-card/90 rounded-xl border p-6 shadow-xl backdrop-blur-sm transition-colors lg:w-1/4",
              {
                "opacity-80": index === 0 || index === 2,
                "z-10 lg:scale-110": index === 1,
              }
            )}
          >
            <p className="mb-4">{testimonial.content}</p>
            <div className="flex items-center gap-4">
              <Image
                className="aspect-square h-10 w-10 rounded-full "
                width={100}
                height={100}
                src={testimonial.author.avatar}
                alt={testimonial.author.name}
              />
              <div className="text-sm">
                <p className="u-text-gray-900 flex items-center space-x-1 font-semibold">
                  <span>{testimonial.author.name}</span>{" "}
                  {testimonial.author.verified && (
                    <VerifiedIcon size={16} color="rgba(29,155,240,1.00)" />
                  )}
                </p>
                <p className="u-text-gray-500">{testimonial.author.role}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
