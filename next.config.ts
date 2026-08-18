import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/projects/judi-guard',
        destination: '/projects/comment-guard',
        permanent: true, // 308
      },
      {
        source: '/projects/judi-guard-v2',
        destination: '/projects/comment-guard-v2',
        permanent: true, // 308
      },
      {
        source: '/projects/judi-guard/',
        destination: '/projects/comment-guard',
        permanent: true,
      },
      {
        source: '/projects/judi-guard-v2/',
        destination: '/projects/comment-guard-v2',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
