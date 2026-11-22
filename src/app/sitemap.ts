import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://www.diyachanda.tech';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-09-12'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
