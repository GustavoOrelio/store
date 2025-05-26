const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["utfs.io"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = withNextIntl(nextConfig);
