/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
      },
    ],
  },
  reactStrictMode: false,
  transpilePackages: ["@palettify/ui", "@palettify/utils", "@palettify/database"],
};
