"use server";

import { prisma } from "@palettify/database";
import { getSession } from "@/modules/auth/services";
import { exclude } from "@/utils";

interface FormData {
  id?: string;
  name?: string;
  slug?: string;
  lightPalette?: any;
  darkPalette?: any;
  published?: boolean;
  radius?: number;
  defaultMode?: "light" | "dark";
}

export const updateTheme = async (formData: FormData) => {
  const { id, name, slug, lightPalette, darkPalette, radius, defaultMode, published } =
    formData;

  let themeId = id;
  const session = await getSession();

  if (!session) throw new Error("Unauthorized");

  try {
    // if no id we create a new theme
    if (!id) {
      const theme = await prisma.theme.create({
        data: {
          user: {
            connect: {
              id: session.user.id,
            },
          },
          ...{ name, slug, radius, defaultMode, published },
        },
      });
      themeId = theme.id;
      if (lightPalette || darkPalette) {
        await prisma.palette.createMany({
          data: [
            ...(lightPalette && [
              {
                mode: "light",
                themeId,
                ...exclude(lightPalette, ["id"]),
              },
            ]),
            ...(darkPalette && [
              {
                mode: "dark",
                themeId,
                ...exclude(darkPalette, ["id"]),
              },
            ]),
          ],
        });
      }
    } else {
      // if id we update the theme
      const existingTheme = await prisma.theme.findUnique({
        where: {
          id,
        },
        select: {
          userId: true,
        },
      });

      // if the theme exists but the user is not the owner we create a new theme instead
      if (existingTheme?.userId !== session?.user.id) {
        const newTheme = await prisma.theme.create({
          data: {
            user: {
              connect: {
                id: session.user.id,
              },
            },
            ...{ name, slug, radius, defaultMode, published },
          },
        });
        themeId = newTheme.id;
      } else {
        // if the theme exists and the user is the owner we update the theme
        if (name || slug || radius || defaultMode || published) {
          await prisma.theme.update({
            where: {
              id: id,
            },
            data: {
              ...(name && { name }),
              ...(slug && { slug }),
              ...(radius && { radius }),
              ...(defaultMode && { defaultMode }),
              ...(published && { published }),
            },
          });
        }
      }

      // we create or update the palettes for the theme
      if (darkPalette && lightPalette) {
        const palettes = await prisma.palette.findMany({
          where: {
            themeId,
          },
        });
        const lightPaletteDb = palettes.find((p) => p.mode === "light");
        const darkPaletteDb = palettes.find((p) => p.mode === "dark");
        if (palettes.length === 0) {
          await prisma.palette.createMany({
            data: [
              {
                ...exclude(lightPalette, ["id"]),
                mode: "light",
                themeId,
              },
              {
                ...exclude(darkPalette, ["id"]),
                mode: "dark",
                themeId,
              },
            ],
          });
        } else {
          await prisma.palette.update({
            where: {
              id: lightPaletteDb?.id,
            },
            data: {
              ...exclude(lightPalette, ["id"]),
            },
          });
          await prisma.palette.update({
            where: {
              id: darkPaletteDb?.id,
            },
            data: {
              ...exclude(darkPalette, ["id"]),
            },
          });
        }
      }
    }
    return { success: true, themeId };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export const toggleLikeTheme = async (themeId: string) => {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        likes: {
          select: {
            id: true,
          },
        },
      },
    });
    if (!user) throw new Error("User not found");
    const like = user.likes.find((l) => l.id === themeId);
    if (like) {
      await prisma.user.update({
        where: {
          id: session.user.id,
        },
        data: {
          likes: {
            disconnect: {
              id: themeId,
            },
          },
        },
      });
    } else {
      await prisma.user.update({
        where: {
          id: session.user.id,
        },
        data: {
          likes: {
            connect: {
              id: themeId,
            },
          },
        },
      });
    }
    return { success: true, liked: !like };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export const deleteTheme = async (themeId: string) => {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  try {
    const theme = await prisma.theme.findUnique({
      where: {
        id: themeId,
      },
      select: {
        userId: true,
      },
    });
    if (!theme) throw new Error("Theme not found");
    if (theme.userId !== session.user.id) throw new Error("Unauthorized");
    await prisma.theme.delete({
      where: {
        id: themeId,
      },
    });
    return { success: true };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
