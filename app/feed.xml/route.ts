import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sanityClient } from '@/lib/sanity';

const postsDir = path.join(process.cwd(), 'content', 'posts');

function readLocalPosts() {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
  return files.map((file) => {
    const full = path.join(postsDir, file);
    const raw = fs.readFileSync(full, 'utf8');
    const { data } = matter(raw);
    return {
      title: data.title || file.replace(/\.mdx?$/, ''),
      excerpt: data.excerpt || '',
      slug: data.slug || file.replace(/\.mdx?$/, ''),
      date: data.date ? new Date(data.date) : new Date(),
    };
  });
}

async function readSanityPosts() {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      excerpt,
      "date": publishedAt
    }`;
    const results = await sanityClient.fetch(query);
    return results
      .filter((p: any) => p.slug)
      .map((p: any) => ({
        title: p.title,
        excerpt: p.excerpt || '',
        slug: p.slug,
        date: p.date ? new Date(p.date) : new Date(),
      }));
  } catch (e) {
    console.error('Error fetching RSS feeds from Sanity', e);
    return [];
  }
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://growthspace.co';
  
  const local = readLocalPosts();
  const sanity = await readSanityPosts();
  const posts = [...local, ...sanity];
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  const itemsXml = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${post.date.toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
    </item>`
    )
    .join('');

  const rssFeedXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>GrowthSpare Blog</title>
  <link>${baseUrl}/blog</link>
  <description>Latest Digital Marketing &amp; Technology Insights from GrowthSpare experts</description>
  <language>en-us</language>
  <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
  ${itemsXml}
</channel>
</rss>`;

  return new Response(rssFeedXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
