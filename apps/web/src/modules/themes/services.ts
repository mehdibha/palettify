import { prisma } from "@palettify/database";
import { getSession } from "@/modules/auth/services";

export const getThemeById = async (id: string) => {
  const theme = await prisma.theme.findUnique({
    where: {
      id,
    },
  });
  return theme;
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
