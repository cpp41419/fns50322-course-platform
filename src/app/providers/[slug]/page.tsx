import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Star,
  CheckCircle,
  Clock,
  Users,
  Phone,
  Mail,
  Globe,
  Award,
  TrendingUp,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { providers, getProviderBySlug } from "@/data/providers";
import { formatCurrency } from "@/lib/utils";
import { getProviderSchema, getBreadcrumbSchema } from "@/lib/schema";
import { ASQAVerifiedBadge, LastUpdatedBadge, DataSourceBadge } from "@/components/trust/TrustSignals";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return providers.map((provider) => ({
    slug: provider.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);

  if (!provider) {
    return { title: "Provider Not Found" };
  }

  return {
    title: `${provider.name} FNS50322 Review | ${formatCurrency(provider.pricing.fns50322.price)}`,
    description: `${provider.name} FNS50322 Diploma review. ${provider.rating} star rating, ${provider.completionRate}% completion rate. ${provider.pricing.fns50322.duration}. ${provider.highlights.slice(0, 2).join(", ")}.`,
    keywords: [
      `${provider.name} FNS50322`,
      `${provider.name} review`,
      `${provider.name} mortgage broker course`,
    ],
  };
}

export default async function ProviderPage({ params }: PageProps) {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);

  if (!provider) {
    notFound();
  }

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProviderSchema(provider)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Compare Providers", url: "/compare" },
            { name: provider.name, url: `/providers/${provider.slug}` },
          ])),
        }}
      />

      {/* Back Link */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-700"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Compare
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Provider Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-brand-100 rounded-xl flex items-center justify-center text-brand-700 font-bold text-2xl">
                    {provider.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-2xl md:text-3xl font-bold text-brand-900">
                        {provider.name}
                      </h1>
                      {provider.verified && (
                        <CheckCircle className="w-6 h-6 text-brand-600" />
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {provider.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        {provider.rating} ({provider.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <ASQAVerifiedBadge
                        rtoCode={provider.asqaRegistration.rtoCode}
                        status={provider.asqaRegistration.registrationStatus}
                      />
                      <LastUpdatedBadge />
                    </div>
                  </div>
                </div>

                <p className="text-lg text-slate-600 mb-6">{provider.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {provider.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing Card */}
              <div className="md:w-80 bg-white rounded-xl border border-slate-200 shadow-lg p-6">
                {provider.featured && (
                  <div className="inline-block bg-brand-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Featured Provider
                  </div>
                )}

                <p className="text-sm text-slate-500 mb-1">FNS50322 Course Fee</p>
                <p className="text-4xl font-bold text-brand-700 mb-2">
                  {formatCurrency(provider.pricing.fns50322.price)}
                </p>

                {provider.pricing.fns50322.fundingEligible && (
                  <p className="text-sm text-green-600 mb-4">
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    VET Student Loan eligible
                  </p>
                )}

                {provider.availabilityAlert && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                    <p className="text-sm text-amber-700 font-medium">
                      {provider.availabilityAlert}
                    </p>
                  </div>
                )}

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Duration</span>
                    <span className="font-medium">{provider.pricing.fns50322.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Delivery</span>
                    <span className="font-medium">
                      {provider.deliveryModes.join(", ")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Next Start</span>
                    <span className="font-medium">
                      {provider.pricing.fns50322.nextStartDate || "Flexible"}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button asChild className="w-full" size="lg">
                    <a
                      href={provider.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enquire Now <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/quiz">Compare Options</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-700">{provider.completionRate}%</div>
              <div className="text-sm text-slate-500">Completion Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-700">{provider.employmentRate}%</div>
              <div className="text-sm text-slate-500">Employment Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-700">
                {provider.studentsGraduated.toLocaleString()}
              </div>
              <div className="text-sm text-slate-500">Graduates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-700">{provider.founded}</div>
              <div className="text-sm text-slate-500">Est.</div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <DataSourceBadge />
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Accreditations */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-brand-600" />
                <h2 className="text-lg font-bold text-brand-900">Accreditations</h2>
              </div>
              <ul className="space-y-2">
                {provider.accreditations.map((acc) => (
                  <li key={acc} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    {acc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Membership Pathways */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-brand-600" />
                <h2 className="text-lg font-bold text-brand-900">Membership Pathways</h2>
              </div>
              <ul className="space-y-2">
                {provider.membershipPathways.map((path) => (
                  <li key={path} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    {path === "Both" ? "MFAA & FBAA" : path} pathway included
                  </li>
                ))}
                {provider.aggregatorPartnerships && (
                  <li className="text-sm text-slate-500 mt-3">
                    Aggregator partners: {provider.aggregatorPartnerships.join(", ")}
                  </li>
                )}
              </ul>
            </div>

            {/* Funding Options */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-brand-600" />
                <h2 className="text-lg font-bold text-brand-900">Funding Options</h2>
              </div>
              <ul className="space-y-2">
                {provider.fundingOptions.map((option) => (
                  <li key={option} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    {option}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-brand-600" />
                <h2 className="text-lg font-bold text-brand-900">Contact</h2>
              </div>
              <ul className="space-y-3">
                {provider.contact.phone && (
                  <li className="flex items-center gap-2 text-slate-600">
                    <Phone className="w-4 h-4" />
                    {provider.contact.phone}
                  </li>
                )}
                {provider.contact.email && (
                  <li className="flex items-center gap-2 text-slate-600">
                    <Mail className="w-4 h-4" />
                    {provider.contact.email}
                  </li>
                )}
                {provider.contact.website && (
                  <li>
                    <a
                      href={provider.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-brand-600 hover:text-brand-700"
                    >
                      <Globe className="w-4 h-4" />
                      Visit Website
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-brand-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Not Sure If {provider.name} Is Right for You?
          </h2>
          <p className="text-brand-200 mb-6">
            Compare all providers side-by-side or take our quiz for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-golden text-brand-900 hover:bg-yellow-400">
              <Link href="/quiz">Take the Quiz</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/compare">Compare All Providers</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
