"use server";

import { prisma } from "@palettify/database";

interface FormData {
  id: string;
  name?: string;
  slug?: string;
  lightPalette?: any;
  darkPalette?: any;
  radius?: number;
  defaultMode?: "light" | "dark";
}

export const updateTheme = async (formData: FormData) => {
  const { id, name, slug, lightPalette, darkPalette, radius, defaultMode } = formData;

  try {
    if (name || slug || radius) {
      await prisma.theme.update({
        where: {
          id: id,
        },
        data: {
          ...(name && { name }),
          ...(slug && { slug }),
          ...(radius && { radius }),
          ...(defaultMode && { defaultMode }),
        },
      });
    }
    if (darkPalette && lightPalette) {
      const palettes = await prisma.palette.findMany({
        where: {
          themeId: id,
        },
      });
      const lightPaletteDb = palettes.find((p) => p.mode === "light");
      const darkPaletteDb = palettes.find((p) => p.mode === "dark");
      if (palettes.length === 0) {
        await prisma.palette.createMany({
          data: [
            {
              mode: "light",
              themeId: id,
              ...lightPalette,
            },
            {
              mode: "dark",
              themeId: id,
              ...darkPalette,
            },
          ],
        });
      } else {
        await prisma.palette.update({
          where: {
            id: lightPaletteDb?.id,
          },
          data: {
            ...lightPalette,
          },
        });
        await prisma.palette.update({
          where: {
            id: darkPaletteDb?.id,
          },
          data: {
            ...darkPalette,
          },
        });
      }
    }
    return { success: true };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
