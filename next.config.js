const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

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
