"use server";

import { prisma } from "@palettify/database";

interface FormData {
  id: string;
  name?: string;
  slug?: string;
  lightPalette?: any;
  darkPalette?: any;
  radius?: number;
}

export const updateTheme = async (formData: FormData) => {
  const { name, slug, lightPalette, darkPalette, radius } = formData;

  try {
    await prisma.theme.update({
      where: {
        id: formData.id,
      },
      data: {
        ...(name && { name }),
        ...(slug && { slug }),
        ...(lightPalette && { lightPalette }),
        ...(darkPalette && { darkPalette }),
        ...(radius && { radius }),
      },
    });
    return { success: true };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
