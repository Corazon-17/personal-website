/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "via.placeholder.com",
      "ik.imagekit.io",
      "user-images.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
