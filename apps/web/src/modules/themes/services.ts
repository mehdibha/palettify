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
      published: true,
    },
    select: {
      id: true,
      name: true,
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
      _count: {
        select: {
          likedBy: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          username: true,
        },
      },
    },
    orderBy: {
      likedBy: {
        _count: "desc",
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
      name: true,
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
      _count: {
        select: {
          likedBy: true,
        },
      },
    },
  });
  return themes;
};

export const getUserLikedThemes = async () => {
  const session = await getSession();
  if (!session) return [];

  const themes = await prisma.theme.findMany({
    where: {
      likedBy: {
        some: {
          id: session.user.id,
        },
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
      _count: {
        select: {
          likedBy: true,
        },
      },
    },
  });
  return themes;
};

export const getUserLikes = async () => {
  const session = await getSession();
  if (!session) return [];
  const userWithLikes = await prisma.user.findUnique({
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
  const likes = userWithLikes ? userWithLikes.likes.map((like) => like.id) : [];
  return likes;
};

export const createTheme = async (data: any) => {
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
      ...data,
    },
  });

  return theme;
};
