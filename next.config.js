/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    api: process.env.BACKEND,
  },
};

module.exports = nextConfig;
