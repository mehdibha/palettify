import { Prisma } from "@prisma/client";

const themeWithPalettes = Prisma.validator<Prisma.ThemeDefaultArgs>()({
  include: { palettes: true },
});

type ThemeWithPalettes = Prisma.ThemeGetPayload<typeof themeWithPalettes>;

export * from "./client";
export type { ThemeWithPalettes };
