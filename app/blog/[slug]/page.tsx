import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { Metadata } from 'next';
import AISnippet from '../../../components/blog/AISnippet';
import Link from 'next/link';

const postsDir = path.join(process.cwd(), 'content', 'posts');

export async function generateStaticParams() {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
  return files.map((file) => ({ slug: file.replace(/\.mdx?$/, '') }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const full = path.join(postsDir, `${params.slug}.md`);
  if (!fs.existsSync(full)) return { title: 'Post' };
  const raw = fs.readFileSync(full, 'utf8');
  const { data } = matter(raw);
  return { title: data.title || 'Post', description: data.excerpt || '' };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const full = path.join(postsDir, `${params.slug}.md`);
  if (!fs.existsSync(full)) return <div className="p-8">Post not found</div>;

  const raw = fs.readFileSync(full, 'utf8');
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return (
    <>
      <article className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-500 text-sm font-medium mb-8 transition-colors">
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-200">
              {data.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">{data.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
            <img src="/growthspare-logo-final-H33coufZj8jv5cgL.avif" alt="Author" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-gray-900">{data.author || 'GrowthSpare'}</p>
              <p className="flex items-center gap-1.5 text-gray-400">{data.date} &middot; {data.readTime}</p>
            </div>
          </div>

          {data.image && (
            <div className="mb-10">
              <img src={data.image} alt="Blog cover" className="w-full rounded-2xl shadow-md object-cover aspect-video" />
            </div>
          )}

          {/* Optional AI snippet from frontmatter */}
          {data.aiSnippet && <AISnippet />}

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </article>
    </>
  );
}
