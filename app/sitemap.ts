import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { sanityClient } from '@/lib/sanity';

const postsDir = path.join(process.cwd(), 'content', 'posts');

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://growthspace.co';

  // Base routes
  const routes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/pricing',
    '/projects',
    '/services',
    '/solutions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Fetch local markdown slugs
  const localSlugs: string[] = [];
  if (fs.existsSync(postsDir)) {
    const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
    localSlugs.push(...files.map((file) => file.replace(/\.mdx?$/, '')));
  }

  let sanitySlugs: string[] = [];
  try {
    const query = `*[_type == "post"] { "slug": slug.current }`;
    const results = await sanityClient.fetch(query);
    sanitySlugs = results
      .filter((p: any) => p.slug)
      .map((p: any) => p.slug);
  } catch (e) {
    console.error('Error fetching sitemap slugs from Sanity', e);
  }

  const allSlugs = Array.from(new Set([...localSlugs, ...sanitySlugs]));

  const blogRoutes = allSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
