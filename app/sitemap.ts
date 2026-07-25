import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { sanityClient } from '@/lib/sanity';
import { LOCATIONS } from '@/lib/data/locations';
import { INDUSTRIES } from '@/lib/data/industries';
import { INTEGRATIONS } from '@/lib/data/integrations';

const postsDir = path.join(process.cwd(), 'content', 'posts');

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://growthspare.com';

  // Base static routes
  const baseRoutes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/pricing',
    '/projects',
    '/services',
    '/solutions',
    '/industries',
    // Sub-services
    '/services/seo',
    '/services/ppc',
    '/services/social-media',
    '/services/branding',
    '/services/web-development',
    '/services/mobile-apps',
    '/services/ai-chatbots',
    '/services/erp',
    '/services/ai-automation',
    '/services/content',
    '/services/crm',
    '/services/custom-software',
    '/services/email',
    '/services/web-design',
    // Solutions
    '/solutions/growth-marketing',
    '/solutions/technology-ai',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-07-25'),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // pSEO Playbook 1: Service Locations
  const locationRoutes: MetadataRoute.Sitemap = [];
  const services = ['seo', 'ai-automation', 'web-development', 'ppc'];
  services.forEach((service) => {
    Object.keys(LOCATIONS).forEach((loc) => {
      locationRoutes.push({
        url: `${baseUrl}/services/${service}/${loc}`,
        lastModified: new Date('2026-07-25'),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    });
  });

  // pSEO Playbook 2: Industry Solutions
  const industryRoutes: MetadataRoute.Sitemap = Object.keys(INDUSTRIES).map((ind) => ({
    url: `${baseUrl}/solutions/${ind}`,
    lastModified: new Date('2026-07-25'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // pSEO Playbook 3: Integrations
  const integrationRoutes: MetadataRoute.Sitemap = Object.keys(INTEGRATIONS).map((tool) => ({
    url: `${baseUrl}/integrations/${tool}`,
    lastModified: new Date('2026-07-25'),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Fetch blog posts
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
    lastModified: new Date('2026-07-25'),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...baseRoutes, ...locationRoutes, ...industryRoutes, ...integrationRoutes, ...blogRoutes];
}
