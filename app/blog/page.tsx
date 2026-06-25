import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "Blog — Digital Marketing Insights | GrowthSpare",
  description:
    "Read the latest insights on SEO, PPC, social media marketing, AI marketing, content strategy, and conversion optimization from GrowthSpare experts.",
};

const postsDir = path.join(process.cwd(), "content", "posts");

function readPosts() {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const full = path.join(postsDir, file);
    const raw = fs.readFileSync(full, "utf8");
    const { data } = matter(raw);
    return {
      title: data.title || file.replace(/\.mdx?$/i, ""),
      excerpt: data.excerpt || "",
      image: data.image || "",
      category: data.category || "",
      author: data.author || "",
      date: data.date || "",
      readTime: data.readTime || "",
      featured: data.featured || false,
      slug: data.slug || file.replace(/\.mdx?$/i, ""),
    } as any;
  });
  // sort by date descending
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export default function BlogPage() {
  const posts = readPosts();
  const featured = posts.filter((p) => p.featured);
  const regular = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Header */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">Blog</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Insights, strategies, and expert advice to help you grow your business
            with digital marketing.
          </p>
        </div>
      </section>

      {/* Categories (static) */}
      <section className="sticky top-16 md:top-20 z-40 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* Featured Posts */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featured.map((post: any) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-black text-gray-900 text-xl leading-snug mb-3 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>&middot;</span>
                    <span>{post.date}</span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
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
                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
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
                  <h2 className="font-bold text-gray-900 mb-2 leading-snug group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>&middot;</span>
                    <span>{post.date}</span>
                    <span>&middot;</span>
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination (static placeholder) */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-lg bg-gray-900 text-white text-sm font-semibold">
              1
            </button>
            <button className="w-9 h-9 rounded-lg border border-gray-200 text-gray-600 text-sm font-semibold hover:border-gray-400 transition-colors">
              2
            </button>
            <button className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-amber-50 border-t border-amber-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
            Get Marketing Insights Every Week
          </h2>
          <p className="text-gray-600 mb-6">
            Join 2,000+ marketers and business owners who get our best content delivered.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-amber-400 text-gray-900"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
