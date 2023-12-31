/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "img.clerk.com",
      },
    ],
    domains: ['i.ytimg.com'],
  },
};
