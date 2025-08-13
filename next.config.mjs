// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js configuration options go here
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
      {
        source: '/second-page',
        destination: '/second-page',
      },
    ];
  },
};

export default nextConfig;