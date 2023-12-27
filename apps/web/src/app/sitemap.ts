import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  //TODO: fix this

  // const domain = `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`;

  // const templates = (await getAllTemplates()).map((template) => template.name);
  // const posts = [];

  // const mainRoutes: MetadataRoute.Sitemap = [""].map((route) => ({
  //   url: `${domain}${route}`,
  //   lastModified: new Date(),
  //   changeFrequency: "daily",
  //   priority: 1,
  // }));

  // const secondaryRoutes: MetadataRoute.Sitemap = [
  //   "/templates",
  //   "/showcase",
  //   "/blog",
  //   "/pricing",
  //   ...templates.map((template) => `/templates/${template}`),
  // ].map((route) => ({
  //   url: `${domain}${route}`,
  //   lastModified: new Date(),
  //   changeFrequency: "daily",
  //   priority: 0.8,
  // }));

  // const tertiaryRoutes: MetadataRoute.Sitemap = posts
  //   .map((postSlug) => `/blog/${postSlug}`)
  //   .map((route) => ({
  //     url: `${domain}${route}`,
  //     lastModified: new Date(),
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   }));

  // const nonRelevantRoutes: MetadataRoute.Sitemap = [].map((route) => ({
  //   url: `${domain}${route}`,
  //   lastModified: new Date(),
  //   changeFrequency: "monthly",
  //   priority: 0.3,
  // }));

  // return [...mainRoutes, ...secondaryRoutes, ...tertiaryRoutes, ...nonRelevantRoutes];
  return [];
}
