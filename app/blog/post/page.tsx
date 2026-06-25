import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Post — GrowthSpare",
  description: "Read the latest digital marketing insights from GrowthSpare experts.",
};

export default function BlogPostPage() {
  return (
    <>
      <article className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-500 text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="mb-6">
            <span className="bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-200">
              SEO
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            If You&apos;re Not Doing This in 2026, Your Business Will Disappear
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80"
              alt="Author"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">GrowthSpare</p>
              <p className="flex items-center gap-1.5 text-gray-400">
                <Clock className="w-3.5 h-3.5" />
                Jun 15, 2026 &middot; 2 min read
              </p>
            </div>
          </div>

          <div className="mb-10">
            <img
              src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Blog cover"
              className="w-full rounded-2xl shadow-md object-cover aspect-video"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              2026 is not about survival — it&apos;s about visibility. If your business isn&apos;t evolving
              with modern marketing strategies, you&apos;re already falling behind. In this blog, discover
              what top brands are doing differently and how GrowthSpare helps you stay ahead.
            </p>
            <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">The Visibility Crisis</h2>
            <p>
              Most small and medium businesses are investing in digital marketing, but very few are
              getting real results. The difference isn&apos;t budget — it&apos;s strategy. Brands that win in
              2026 are the ones that combine SEO, paid advertising, and content into a unified growth
              system.
            </p>
            <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">What Top Brands Are Doing Differently</h2>
            <ul className="space-y-3">
              {[
                "They treat SEO as a long-term asset, not a quick fix",
                "They run paid ads with precise audience targeting and A/B tested creatives",
                "They create content with both SEO and conversion in mind",
                "They track every touchpoint and optimize based on data, not gut feeling",
                "They have dedicated marketing teams or agencies that execute consistently",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">The GrowthSpare Approach</h2>
            <p>
              At GrowthSpare, we build growth systems — not just campaigns. Our data-driven approach
              ensures that every piece of content, every ad, and every SEO optimization contributes
              to one goal: sustainable business growth.
            </p>
            <p>
              Whether you&apos;re starting from scratch or looking to scale, the foundation is the same:
              understand your audience, create value, and distribute it through the right channels at
              the right time.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-amber-50 rounded-2xl p-8 border border-amber-100">
            <h3 className="font-black text-gray-900 text-xl mb-3">
              Ready to Future-Proof Your Business?
            </h3>
            <p className="text-gray-600 mb-5">
              Book a free strategy session and discover how GrowthSpare can help your business
              stay visible and competitive in 2026 and beyond.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-8">More Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Digital Marketing Strategies That Actually Work in 2026", category: "PPC", image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { title: "How to Use AI for Content Creation Without Losing Your Human Touch", category: "AI Marketing", image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { title: "The Ultimate Local SEO Guide for Delhi NCR Businesses", category: "SEO", image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400" },
            ].map((post) => (
              <Link key={post.title} href="/blog/post" className="group block rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="h-44 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-amber-600 mb-2 block">{post.category}</span>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-amber-600 transition-colors">{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
