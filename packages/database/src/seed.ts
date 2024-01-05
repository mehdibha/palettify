import { prisma } from "./client";

(async () => {
  try {
    // Nothing to seed for now
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
