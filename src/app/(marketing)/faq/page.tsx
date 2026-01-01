import { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, Search, BookOpen, Users, DollarSign, Briefcase, Monitor } from "lucide-react";
import { faqCategories, faqItems, getFeaturedFAQs } from "@/data/faq";

export const metadata: Metadata = {
  title: "FNS50322 FAQ | Frequently Asked Questions",
  description: "Get answers to common questions about FNS50322 Diploma of Finance and Mortgage Broking. Course duration, costs, MFAA/FBAA requirements, and career pathways.",
  keywords: ["FNS50322 FAQ", "mortgage broker questions", "diploma FAQ", "MFAA requirements"],
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Users,
  DollarSign,
  Briefcase,
  Monitor,
};

export default function FAQPage() {
  const featuredFAQs = getFeaturedFAQs();

  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              FNS50322 Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Everything you need to know about the Diploma of Finance and Mortgage
              Broking Management. Can&apos;t find your answer? Contact us.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="search"
                placeholder="Search questions..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {faqCategories.map((category) => {
              const IconComponent = iconMap[category.icon] || BookOpen;
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="flex flex-col items-center p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all text-center"
                >
                  <IconComponent className="w-6 h-6 text-brand-600 mb-2" />
                  <h3 className="font-semibold text-brand-900 text-sm">{category.name}</h3>
                  <p className="text-xs text-slate-500">{category.count} questions</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured FAQs */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-900 mb-8 text-center">
            Most Popular Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {featuredFAQs.map((faq) => (
              <details
                key={faq.id}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50">
                  <h3 className="font-semibold text-brand-900 pr-4">{faq.question}</h3>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {faq.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-brand-50 text-brand-700 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-3">
                    Last updated: {faq.lastUpdated} | {faq.views.toLocaleString()} views |{" "}
                    {faq.helpful} found this helpful
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* All FAQs by Category */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category) => {
              const categoryFAQs = faqItems.filter((f) => f.category === category.id);
              const IconComponent = iconMap[category.icon] || BookOpen;

              return (
                <div key={category.id} id={category.id} className="mb-12 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-brand-700" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-brand-900">{category.name}</h2>
                      <p className="text-sm text-slate-500">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {categoryFAQs.map((faq) => (
                      <details
                        key={faq.id}
                        className="group bg-slate-50 rounded-xl overflow-hidden"
                      >
                        <summary className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-slate-100">
                          <h3 className="font-medium text-brand-900 pr-4">{faq.question}</h3>
                          <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                        </summary>
                        <div className="px-4 pb-4 pt-0">
                          <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-brand-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-brand-200 mb-6">
            Can&apos;t find what you&apos;re looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-700 rounded-lg font-semibold hover:bg-slate-100"
            >
              Contact Us
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-6 py-3 bg-golden text-brand-900 rounded-lg font-semibold hover:bg-yellow-400"
            >
              Find My Course
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
