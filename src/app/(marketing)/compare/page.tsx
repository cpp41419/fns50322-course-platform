import { Metadata } from "next";
import Link from "next/link";
import { Shield, Star, MapPin, Clock, CheckCircle, ExternalLink, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { providers } from "@/data/providers";
import { formatCurrency } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Compare FNS50322 RTOs | Side-by-Side Comparison",
  description: "Compare FNS50322 Diploma of Finance and Mortgage Broking providers side-by-side. Transparent pricing, completion rates, MFAA/FBAA pathways, and student reviews.",
  keywords: ["FNS50322 compare", "mortgage broker course comparison", "RTO comparison", "best FNS50322 provider"],
};

export default function ComparePage() {
  const sortedProviders = [...providers].sort((a, b) => b.rating - a.rating);

  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              Independent Comparison
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Compare FNS50322 Providers
            </h1>
            <p className="text-lg text-slate-600">
              Side-by-side comparison of {providers.length} RTOs offering the Diploma of Finance
              and Mortgage Broking Management. Transparent pricing, real completion rates.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Summary */}
      <section className="py-6 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium">
                All States
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                Online & Blended
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                VET Loan Eligible
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Showing {providers.length} providers sorted by rating
            </p>
          </div>
        </div>
      </section>

      {/* Provider Cards */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {sortedProviders.map((provider, index) => (
              <div
                key={provider.id}
                className={`bg-white rounded-xl border ${
                  provider.featured ? "border-brand-300 ring-2 ring-brand-100" : "border-slate-200"
                } overflow-hidden hover:shadow-lg transition-shadow`}
              >
                {provider.featured && (
                  <div className="bg-brand-700 text-white text-center py-1 text-sm font-medium">
                    Featured Provider
                  </div>
                )}

                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Provider Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center text-brand-700 font-bold text-xl">
                          {provider.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-xl font-bold text-brand-900">
                              {provider.name}
                            </h2>
                            {provider.verified && (
                              <CheckCircle className="w-5 h-5 text-brand-600" />
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-500">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {provider.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                              {provider.rating} ({provider.reviews} reviews)
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-4">{provider.description}</p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {provider.highlights.slice(0, 4).map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-xs font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Delivery Modes */}
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-600">
                            {provider.pricing.fns50322.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-600">
                            {provider.studentsGraduated.toLocaleString()} graduates
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="lg:w-72 lg:text-right">
                      <div className="bg-slate-50 rounded-xl p-4 lg:text-center">
                        {provider.pricing.fns50322.discount && (
                          <p className="text-sm text-red-600 font-medium mb-1">
                            Save {formatCurrency(provider.pricing.fns50322.discount)}!
                          </p>
                        )}
                        <p className="text-3xl font-bold text-brand-700 mb-1">
                          {formatCurrency(provider.pricing.fns50322.price)}
                        </p>
                        <p className="text-sm text-slate-500 mb-4">
                          {provider.pricing.fns50322.fundingEligible && "VET Loan eligible"}
                        </p>

                        {provider.availabilityAlert && (
                          <p className="text-xs text-amber-600 font-medium mb-3 bg-amber-50 rounded-lg py-2 px-3">
                            {provider.availabilityAlert}
                          </p>
                        )}

                        <div className="space-y-2">
                          <Button asChild className="w-full">
                            <Link href={`/providers/${provider.slug}`}>
                              View Details
                            </Link>
                          </Button>
                          <Button asChild variant="outline" className="w-full">
                            <a
                              href={provider.contact.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit Website <ExternalLink className="w-4 h-4 ml-1" />
                            </a>
                          </Button>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-2 mt-4 text-center">
                        <div className="bg-green-50 rounded-lg p-2">
                          <p className="text-lg font-bold text-green-700">
                            {provider.completionRate}%
                          </p>
                          <p className="text-xs text-green-600">Completion</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-2">
                          <p className="text-lg font-bold text-blue-700">
                            {provider.employmentRate}%
                          </p>
                          <p className="text-xs text-blue-600">Employment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Not Sure Which Provider is Right for You?
          </h2>
          <p className="text-brand-200 mb-6 max-w-xl mx-auto">
            Take our 2-minute quiz to get personalized recommendations based on your
            budget, timeline, and learning preferences.
          </p>
          <Button asChild size="lg" className="bg-golden text-brand-900 hover:bg-yellow-400">
            <Link href="/quiz">
              Find My Perfect Match
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
