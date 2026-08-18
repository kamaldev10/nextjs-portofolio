import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://amkamal.web.id/sitemap.xml',
    host: 'https://amkamal.web.id',
  };
}
