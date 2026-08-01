/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    useTypeScriptCli: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
