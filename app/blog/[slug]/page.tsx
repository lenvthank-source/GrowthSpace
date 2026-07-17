import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { sanityClient } from '@/lib/sanity';

const postsDir = path.join(process.cwd(), 'content', 'posts');

async function getSanityPost(slug: string) {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      content,
      excerpt,
      "image": mainImage.asset->url,
      category,
      author,
      "date": publishedAt,
      readTime,
      seoTitle,
      metaDescription,
      canonicalUrl,
      noindex,
      faq
    }`;
    return await sanityClient.fetch(query, { slug });
  } catch (e) {
    console.error('Error loading single post from Sanity', e);
    return null;
  }
}

export async function generateStaticParams() {
  const localSlugs: any[] = [];
  if (fs.existsSync(postsDir)) {
    const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
    localSlugs.push(...files.map((file) => ({ slug: file.replace(/\.mdx?$/, '') })));
  }
  
  try {
    const query = `*[_type == "post"] { "slug": slug.current }`;
    const sanitySlugs = await sanityClient.fetch(query);
    const validSanitySlugs = (sanitySlugs || [])
      .filter((s: any) => s && typeof s.slug === 'string' && s.slug.trim() !== '')
      .map((s: any) => ({ slug: s.slug }));
    localSlugs.push(...validSanitySlugs);
  } catch (e) {
    console.error('Error fetching static params from Sanity', e);
  }
  
  return localSlugs;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const sanityPost = await getSanityPost(params.slug);
  if (sanityPost) {
    return {
      title: `${sanityPost.seoTitle || sanityPost.title} — GrowthSpare`,
      description: sanityPost.metaDescription || sanityPost.excerpt || '',
      alternates: {
        canonical: sanityPost.canonicalUrl || undefined,
      },
      robots: sanityPost.noindex ? { index: false, follow: false } : undefined,
    };
  }

  const full = path.join(postsDir, `${params.slug}.md`);
  if (!fs.existsSync(full)) return { title: 'Post' };
  const raw = fs.readFileSync(full, 'utf8');
  const { data } = matter(raw);
  return { title: `${data.title || 'Post'} — GrowthSpare`, description: data.excerpt || '' };
}

const portableTextComponents = {
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noopener noreferrer' : undefined;
      const target = !value.href.startsWith('/') ? '_blank' : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          target={target}
          className="text-amber-500 hover:text-amber-600 underline break-words font-medium transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl md:text-2xl font-black text-gray-900 mt-6 mb-3">{children}</h3>,
    normal: ({ children }: any) => <p className="text-gray-600 leading-relaxed mb-6">{children}</p>,
  },
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let postData: any = null;
  let isSanity = false;
  let contentHtml = '';

  const sanityPost = await getSanityPost(params.slug);
  if (sanityPost) {
    postData = sanityPost;
    isSanity = true;
  } else {
    const full = path.join(postsDir, `${params.slug}.md`);
    if (fs.existsSync(full)) {
      const raw = fs.readFileSync(full, 'utf8');
      const { data, content } = matter(raw);
      const processed = await remark().use(html).process(content);
      contentHtml = processed.toString();
      postData = {
        title: data.title || '',
        category: data.category || '',
        author: data.author || 'GrowthSpare',
        date: data.date || '',
        readTime: data.readTime || '',
        image: data.image || '',
        excerpt: data.excerpt || '',
      };
    }
  }

  if (!postData) {
    return <div className="p-8 text-center text-gray-500">Post not found</div>;
  }

  const displayDate = isSanity && postData.date
    ? new Date(postData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : postData.date;

  // Build Structured Data (JSON-LD)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://growthspace.co/#organization',
    'name': 'GrowthSpare',
    'url': 'https://growthspace.co',
    'logo': 'https://growthspace.co/growthspare-logo-final-H33coufZj8jv5cgL.avif'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://growthspace.co'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Blog',
        'item': 'https://growthspace.co/blog'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': postData.title,
        'item': `https://growthspace.co/blog/${params.slug}`
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': postData.title,
    'description': postData.excerpt,
    'image': postData.image || 'https://growthspace.co/growthspare-logo-final-H33coufZj8jv5cgL.avif',
    'datePublished': postData.date,
    'author': {
      '@type': 'Person',
      'name': postData.author
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'GrowthSpare',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://growthspace.co/growthspare-logo-final-H33coufZj8jv5cgL.avif'
      }
    }
  };

  const faqSchema = postData.faq && postData.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': postData.faq.map((item: any) => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-500 text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="mb-6">
            <span className="bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-200">
              {postData.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">{postData.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
            <img src="/growthspare-logo-final-H33coufZj8jv5cgL.avif" alt="Author" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-gray-900">{postData.author}</p>
              <p className="flex items-center gap-1.5 text-gray-400">{displayDate} &middot; {postData.readTime}</p>
            </div>
          </div>

          {postData.image && (
            <div className="mb-10">
              <img src={postData.image} alt={postData.title} className="w-full rounded-2xl shadow-md object-cover aspect-video" />
            </div>
          )}

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6 [word-break:break-word] [&_a]:text-amber-500 [&_a]:hover:text-amber-600 [&_a]:underline [&_a]:break-words [&_a]:font-medium [&_a]:transition-colors">
            {isSanity ? (
              <PortableText value={postData.content} components={portableTextComponents} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            )}
          </div>
        </div>
      </article>
    </>
  );
}
