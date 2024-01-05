import { prisma } from "@palettify/database";

export const getThemeById = async (id: string) => {
  const theme = await prisma.theme.findUnique({
    where: {
      id,
    },
  });
  return theme;
};
