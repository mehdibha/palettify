/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  images: {
    remotePatterns: [],
  },
  reactStrictMode: false,
  transpilePackages: [
    "@palettify/ui",
    "@palettify/utils",
    "@palettify/database",
  ],
};
