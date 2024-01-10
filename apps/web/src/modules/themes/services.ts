import { prisma } from "@palettify/database";
import { getSession } from "@/modules/auth/services";

export const getThemeById = async (
  id: string,
  { palettes = false }: { palettes?: boolean }
) => {
  const theme = await prisma.theme.findUnique({
    where: {
      id,
    },
    include: {
      palettes,
    },
  });
  return theme;
};

export const getTrendingThemes = async () => {
  const themes = await prisma.theme.findMany({
    where: {
      userId: "clqzcfga3000014myn9agr9w8",
    },
    select: {
      id: true,
      defaultMode: true,
      palettes: {
        select: {
          mode: true,
          background: true,
          foreground: true,
          primary: true,
          primaryForeground: true,
          secondary: true,
          secondaryForeground: true,
          card: true,
          cardForeground: true,
          muted: true,
          mutedForeground: true,
          border: true,
        },
      },
    },
  });
  return themes;
};

export const getUserThemes = async () => {
  const session = await getSession();
  if (!session) return [];

  const themes = await prisma.theme.findMany({
    where: {
      user: {
        id: session.user.id,
      },
    },
    select: {
      id: true,
      defaultMode: true,
      palettes: {
        select: {
          mode: true,
          background: true,
          foreground: true,
          primary: true,
          primaryForeground: true,
          secondary: true,
          secondaryForeground: true,
          card: true,
          cardForeground: true,
          muted: true,
          mutedForeground: true,
          border: true,
        },
      },
    },
  });
  return themes;
};

export const createTheme = async () => {
  const session = await getSession();

  const theme = await prisma.theme.create({
    data: {
      ...(session && {
        user: {
          connect: {
            id: session.user.id,
          },
        },
      }),
    },
  });

  return theme;
};
