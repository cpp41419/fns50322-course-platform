import Link from "next/link";
import { ArrowRight, Shield, Users, TrendingUp, Award, BookOpen, DollarSign, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { providers } from "@/data/providers";
import { getCourseSchema, getHowToSchema } from "@/lib/schema";

// Real, verifiable stats only
const stats = [
  { value: `${providers.length}`, label: "RTOs Compared" },
  { value: "100%", label: "Independent" },
  { value: "12", label: "Core Units" },
  { value: "2026", label: "Current Standard" },
];

const features = [
  {
    icon: Shield,
    title: "100% Independent",
    description: "No sponsorships, no bias. We show you real data from real students and working brokers.",
  },
  {
    icon: Users,
    title: "Side-by-Side Comparison",
    description: "Compare pricing, duration, support quality, and MFAA/FBAA membership outcomes instantly.",
  },
  {
    icon: TrendingUp,
    title: "Career Outcomes",
    description: "See actual employment rates, starting salaries, and aggregator placement data for each provider.",
  },
];

const coreModules = [
  { code: "FNSINC511", name: "Appropriate Needs Analysis", aka: "The Fact Find" },
  { code: "FNSCRD501", name: "Respond to Financial Situations", aka: "Credit Impairment" },
  { code: "FNSFMB512", name: "Identify and Present Credit Options", aka: "Loan Products" },
  { code: "BSBPEF501", name: "Manage Personal & Professional Development", aka: "Soft Skills" },
];

export default function HomePage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getCourseSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getHowToSchema()),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Independent & Transparent | 2026 Standard
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 mb-6 leading-tight">
              Compare{" "}
              <span className="text-brand-600">FNS50322</span>{" "}
              Courses
            </h1>

            <p className="text-xl text-slate-600 mb-4 max-w-2xl mx-auto">
              Diploma of Finance and Mortgage Broking Management
            </p>

            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              The mandatory qualification for becoming a licensed Mortgage Broker in Australia.
              Compare RTOs side-by-side with transparent pricing, real completion rates,
              and MFAA/FBAA pathway information.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button asChild size="lg" className="bg-brand-700 hover:bg-brand-600 group">
                <Link href="/quiz">
                  Find My Course <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/compare">Compare All Providers</Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Supersedes FNS50320 | Required for MFAA & FBAA Membership
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-in-up hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-brand-700">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">
              Why Aspiring Brokers Choose Us
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We&apos;re not an RTO. We&apos;re your independent guide to finding the right FNS50322 training provider.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover-lift hover-glow group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-brand-700 group-hover:text-brand-600 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-brand-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">
              Core FNS50322 Modules
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Key units you&apos;ll complete in your Diploma of Finance and Mortgage Broking Management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {coreModules.map((module) => (
              <div
                key={module.code}
                className="bg-brand-50 rounded-xl p-6 border border-brand-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-brand-600 mb-1">{module.code}</p>
                    <h3 className="font-semibold text-brand-900 mb-1">{module.name}</h3>
                    <p className="text-sm text-slate-500">Known as: {module.aka}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/modules">View All 12 Core Units</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">
              Career Pathways
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              What you can do after completing FNS50322
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Mortgage Broker", salary: "$85K - $250K+", icon: DollarSign },
              { title: "Credit Analyst", salary: "$70K - $120K", icon: TrendingUp },
              { title: "Lending Manager", salary: "$90K - $150K", icon: Award },
            ].map((career, index) => (
              <div
                key={career.title}
                className="bg-white rounded-xl p-6 text-center border border-slate-200 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-brand-200 transition-all duration-300">
                  <career.icon className="w-6 h-6 text-brand-700" />
                </div>
                <h3 className="font-semibold text-brand-900 mb-2">{career.title}</h3>
                <p className="text-brand-600 font-medium">{career.salary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Become a Mortgage Broker?
          </h2>
          <p className="text-brand-200 mb-8 max-w-xl mx-auto">
            Take our 2-minute quiz and get matched with FNS50322 providers that fit your budget,
            timeline, and learning style.
          </p>
          <Button asChild size="lg" className="bg-golden text-brand-900 hover:bg-yellow-400 group">
            <Link href="/quiz">
              Start Free Quiz <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2>What is FNS50322?</h2>
            <p>
              The <strong>FNS50322 Diploma of Finance and Mortgage Broking Management</strong> is
              the nationally recognized qualification required to become a licensed mortgage broker
              in Australia. This qualification supersedes FNS50320 and is the current 2026 standard
              for the industry.
            </p>

            <h3>Who Needs This Qualification?</h3>
            <ul>
              <li>Aspiring mortgage brokers seeking MFAA or FBAA membership</li>
              <li>Credit analysts looking to expand into broking</li>
              <li>Real estate agents diversifying into finance</li>
              <li>Financial planners adding mortgage services</li>
            </ul>

            <h3>FNS50322 vs FNS50320</h3>
            <p>
              FNS50322 is the updated version of FNS50320, incorporating the latest regulatory
              requirements and industry standards. If you&apos;re starting fresh, you should enrol
              in an FNS50322 program to ensure your qualification meets current requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
