import { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { blogPosts, getFeaturedPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "FNS50322 Blog | Mortgage Broker Training Insights",
  description: "Expert guides on FNS50322, mortgage broker careers, assessment tips, MFAA/FBAA membership, and industry news. Updated for 2026.",
  keywords: ["FNS50322 blog", "mortgage broker guides", "career advice", "assessment tips"],
};

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = blogPosts.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              FNS50322 Blog & Guides
            </h1>
            <p className="text-lg text-slate-600">
              Expert insights on mortgage broker training, career advice, assessment tips,
              and industry updates. Everything you need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-900 mb-8">Featured Guides</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                  <span className="text-white/80 text-6xl font-bold">
                    {post.title.charAt(0)}
                  </span>
                </div>
                <div className="p-5">
                  <span className="inline-block px-2 py-1 bg-brand-100 text-brand-700 rounded text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-brand-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} min read
                    </span>
                    <span className="text-brand-600 font-medium group-hover:underline">
                      Read more
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-900 mb-8">All Articles</h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col md:flex-row gap-6 bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-all"
              >
                <div className="md:w-48 h-32 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white/80 text-4xl font-bold">
                    {post.title.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block px-2 py-1 bg-brand-100 text-brand-700 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} min read
                    </span>
                    <span className="text-brand-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-brand-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Mortgage Broker Career?
          </h2>
          <p className="text-brand-200 mb-6">
            Compare FNS50322 providers and find the perfect course for you.
          </p>
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 px-6 py-3 bg-golden text-brand-900 rounded-lg font-semibold hover:bg-yellow-400"
          >
            Compare Providers <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
