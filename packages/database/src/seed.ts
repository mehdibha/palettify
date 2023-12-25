import { prisma } from "./client";

(async () => {
  try {
    // Nothing to seed for now
    // moved templates seeding to the templates package
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
