/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.1.9",
    "100.118.231.27",
    "0.0.0.0",
  ],
  experimental: {
    useTypeScriptCli: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
