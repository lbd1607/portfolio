/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    EMAIL: process.env.EMAIL,
  },
};

module.exports = nextConfig;
