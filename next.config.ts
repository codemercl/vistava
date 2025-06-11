import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/posts',
        permanent: true,
      }
    ];
  },

  async rewrites() {
    return [
      {
        source: '/api/news',
        destination: 'https://newsapi.org/v1/latest',
      },
      {
        source: '/profile/:username',
        destination: '/users/:username',
      },
    ];
  },
};

export default nextConfig;


