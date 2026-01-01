import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPostBySlug, getRecentPosts } from "@/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.tags,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRecentPosts(3).filter((p) => p.slug !== post.slug);

  return (
    <>
      {/* Back Link */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-700"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-slate-600 mb-6">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-slate prose-lg max-w-none prose-headings:text-brand-900 prose-a:text-brand-600 prose-strong:text-brand-900">
              <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-3">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 p-6 bg-brand-50 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-brand-900">Found this helpful?</p>
                  <p className="text-sm text-slate-600">Share it with others studying FNS50322</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-brand-700 text-white rounded-lg hover:bg-brand-600">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-brand-900 mb-6">Related Articles</h2>

              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="block p-4 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-brand-900 mb-1 hover:text-brand-600">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-1">{relatedPost.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-brand-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your FNS50322?
          </h2>
          <p className="text-brand-200 mb-6">
            Compare providers and find the perfect course for your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-golden text-brand-900 hover:bg-yellow-400">
              <Link href="/quiz">Find My Course</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/compare">Compare Providers</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function formatContent(content: string): string {
  // Simple markdown-like formatting
  return content
    .split("\n")
    .map((line) => {
      // Headers
      if (line.startsWith("# ")) return `<h1>${line.slice(2)}</h1>`;
      if (line.startsWith("## ")) return `<h2>${line.slice(3)}</h2>`;
      if (line.startsWith("### ")) return `<h3>${line.slice(4)}</h3>`;

      // Bold
      line = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

      // Lists
      if (line.startsWith("- ")) return `<li>${line.slice(2)}</li>`;

      // Tables (basic)
      if (line.startsWith("|")) {
        const cells = line.split("|").filter(Boolean).map((c) => c.trim());
        if (line.includes("---")) return "";
        return `<tr>${cells.map((c) => `<td>${c}</td>`).join("")}</tr>`;
      }

      // Paragraphs
      if (line.trim()) return `<p>${line}</p>`;

      return "";
    })
    .join("\n");
}
