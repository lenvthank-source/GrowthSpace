import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import TextRollButton from "@/components/ui/TextRollButton";
import SectionBadge from "@/components/ui/SectionBadge";
import ExpandingCard from "@/components/ui/ExpandingCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sanityClient } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "GrowthSpare Blog — Digital Marketing & AI Growth Insights",
  description:
    "Master digital growth with actionable guides on SEO, Google Ads, AI automation & custom tech from GrowthSpare experts. Boost your conversion rates today! ✓",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "GrowthSpare Blog — Digital Marketing & AI Growth Insights",
    description:
      "Master digital growth with actionable guides on SEO, Google Ads, AI automation & custom tech from GrowthSpare experts. Boost your conversion rates today! ✓",
    url: "https://growthspare.com/blog",
    type: "website",
  },
};

const postsDir = path.join(process.cwd(), "content", "posts");

function readPosts() {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const full = path.join(postsDir, file);
    const raw = fs.readFileSync(full, "utf8");
    const { data } = matter(raw);
    const stat = fs.statSync(full);
    const rawDate = data.date || stat.mtime.toISOString();
    return {
      title: data.title || file.replace(/\.mdx?$/i, ""),
      excerpt: data.excerpt || "",
      image: data.image || "",
      category: data.category || "",
      author: data.author || "GrowthSpare Team",
      rawDate: rawDate,
      date: new Date(rawDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      readTime: data.readTime || "5 min read",
      featured: data.featured || false,
      slug: data.slug || file.replace(/\.mdx?$/i, ""),
    } as any;
  });
  return posts;
}

async function readSanityPosts() {
  try {
    const query = `*[_type == "post"] | order(select(defined(publishedAt) => publishedAt, _createdAt) desc) {
      title,
      "slug": slug.current,
      excerpt,
      "image": mainImage.asset->url,
      category,
      author,
      "rawDate": select(defined(publishedAt) => publishedAt, _createdAt),
      readTime,
      featured
    }`;
    const sanityPosts = await sanityClient.fetch(query);
    return (sanityPosts || [])
      .filter((p: any) => p.slug)
      .map((p: any) => {
        const rawDate = p.rawDate || new Date().toISOString();
        return {
          ...p,
          author: p.author || "GrowthSpare Team",
          slug: typeof p.slug === 'string' ? p.slug.replace(/^\/+/, '').replace(/\/+$/, '') : p.slug,
          rawDate: rawDate,
          date: new Date(rawDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          readTime: p.readTime || "5 min read",
        };
      });
  } catch (e) {
    console.error("Error loading posts from Sanity", e);
    return [];
  }
}

export default async function BlogPage() {
  const localPosts = readPosts();
  const sanityPosts = await readSanityPosts();
  const posts = [...sanityPosts, ...localPosts];
  // Sort posts strictly by date descending (latest to oldest)
  posts.sort((a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime());

  const featured = posts.filter((p) => p.featured);
  const regular = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Header */}
      <section className="bg-[#FFFFFF] py-16 md:py-20 border-b border-gray-100">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-[#111827] mb-4">Blog</h1>
          <p className="text-[#6B7280] font-sans text-lg max-w-2xl mx-auto">
            Insights, strategies, and expert advice to help you grow your business
            with digital marketing.
          </p>
        </div>
      </FadeIn>
      </section>

      {/* Categories (static) */}
      <section className="sticky top-16 md:top-20 z-40 bg-white border-b border-gray-100">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {[
              "All",
              "SEO",
              "PPC",
              "Social Media",
              "AI Marketing",
              "Email Marketing",
              "Conversion Optimization",
              "Analytics",
            ].map((cat) => (
              <button
                key={cat}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>
      </section>

      {/* Featured Posts */}
      <section className="py-12 md:py-16 bg-white">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featured.map((post: any) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#F26522] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-black text-[#111827] text-xl leading-snug mb-3 group-hover:text-[#F26522] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#6B7280] font-sans text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-[#6B7280] font-sans">
                    {post.author && <span>{post.author}</span>}
                    {post.author && post.date && <span>&middot;</span>}
                    {post.date && <span>{post.date}</span>}
                    {((post.author || post.date) && post.readTime) && <span>&middot;</span>}
                    {post.readTime && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Regular Posts */}
          <div className="grid md:grid-cols-2 gap-8">
            {regular.map((post: any) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-0.5"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="font-bold text-[#111827] mb-2 leading-snug group-hover:text-[#F26522] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#6B7280] font-sans text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280] font-sans">
                    {post.author && <span>{post.author}</span>}
                    {post.author && post.date && <span>&middot;</span>}
                    {post.date && <span>{post.date}</span>}
                    {((post.author || post.date) && post.readTime) && <span>&middot;</span>}
                    {post.readTime && (
                      <>
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination (static placeholder) */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-[#6B7280] font-sans hover:border-gray-400 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-lg bg-gray-900 text-white text-sm font-semibold">
              1
            </button>
            <button className="w-9 h-9 rounded-lg border border-gray-200 text-gray-600 text-sm font-semibold hover:border-gray-400 transition-colors">
              2
            </button>
            <button className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-[#6B7280] font-sans hover:border-gray-400 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </FadeIn>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-amber-50 border-t border-amber-100">
        <FadeIn>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#111827] mb-3">
            Get Marketing Insights Every Week
          </h2>
          <p className="text-gray-600 mb-6">
            Join 2,000+ marketers and business owners who get our best content delivered.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-amber-400 text-[#111827]"
            />
            <button className="bg-[#F26522] hover:bg-[#e05a1a] text-white font-semibold px-6 py-3 rounded-lg transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </FadeIn>
      </section>
    </>
  );
}
