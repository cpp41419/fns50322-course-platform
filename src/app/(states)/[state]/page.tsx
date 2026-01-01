import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  CheckCircle,
  DollarSign,
  Users,
  ArrowRight,
  TrendingUp,
  Home,
  Briefcase,
  Lightbulb,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { states, getStateBySlug } from "@/data/states";
import { providers, getProvidersByState } from "@/data/providers";
import { formatCurrency } from "@/lib/utils";

interface PageProps {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return states.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);

  if (!state) {
    return { title: "State Not Found" };
  }

  return {
    title: `FNS50322 in ${state.name} | Mortgage Broker Course ${state.code} 2026`,
    description: `Become a mortgage broker in ${state.name}. ${state.providerCount} FNS50322 providers, avg. ${formatCurrency(state.averagePrice)}. ${state.capital} median house price ${state.medianHousePrice}. Local market insights and career tips.`,
    keywords: [
      `FNS50322 ${state.name}`,
      `mortgage broker course ${state.code}`,
      `become mortgage broker ${state.capital}`,
      `diploma finance ${state.code}`,
      `${state.capital} mortgage broker`,
    ],
  };
}

export default async function StatePage({ params }: PageProps) {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);

  if (!state) {
    notFound();
  }

  const stateProviders = getProvidersByState(state.code);

  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium">
                <MapPin className="w-4 h-4" />
                {state.code} Guide
              </span>
              <span className="text-sm text-slate-500">Updated January 2026</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Become a Mortgage Broker in {state.name}
            </h1>

            <p className="text-lg text-slate-600 mb-8">
              Everything you need to know about FNS50322 training, licensing, and
              building a mortgage broking career in {state.code}. Local market insights
              and {stateProviders.length} providers compared.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <Home className="w-6 h-6 text-brand-600 mx-auto mb-2" />
                <p className="text-lg font-bold text-brand-900">{state.medianHousePrice}</p>
                <p className="text-xs text-slate-500">Median House Price</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <Users className="w-6 h-6 text-brand-600 mx-auto mb-2" />
                <p className="text-lg font-bold text-brand-900">{state.population}</p>
                <p className="text-xs text-slate-500">Population</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <DollarSign className="w-6 h-6 text-brand-600 mx-auto mb-2" />
                <p className="text-lg font-bold text-brand-900">{formatCurrency(state.averagePrice)}</p>
                <p className="text-xs text-slate-500">Avg. Course Cost</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <Briefcase className="w-6 h-6 text-brand-600 mx-auto mb-2" />
                <p className="text-lg font-bold text-brand-900">{stateProviders.length}</p>
                <p className="text-xs text-slate-500">Local Providers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-brand-600" />
              <h2 className="text-2xl font-bold text-brand-900">
                {state.name} Mortgage Market
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-brand-900 mb-4">Market Insights</h3>
                <ul className="space-y-3">
                  {state.marketInsights.map((insight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-brand-900 mb-4">Top Growth Areas</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {state.topSuburbs.map((suburb) => (
                    <span
                      key={suburb}
                      className="px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm"
                    >
                      {suburb}
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold text-brand-900 mb-4">Broker Competition</h3>
                <p className="text-slate-600">{state.brokerDensity}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Tips */}
      <section className="py-12 bg-brand-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-brand-600" />
              <h2 className="text-2xl font-bold text-brand-900">
                Local Tips for {state.code} Brokers
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {state.localTips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-brand-200"
                >
                  <p className="text-slate-700">{tip}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white rounded-xl border border-brand-200">
              <h3 className="font-semibold text-brand-900 mb-2">Licensing Note</h3>
              <p className="text-slate-600 text-sm">{state.licensingNotes}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-900 mb-6">
              {state.name} Licensing Requirements
            </h2>

            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <p className="text-sm text-slate-600 mb-4">
                <strong>Licensing Body:</strong> {state.licensingBody}
              </p>
              <div className="space-y-3">
                {state.requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-brand-700 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-slate-700 pt-0.5">{req}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Aggregator Presence */}
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-5 h-5 text-brand-600" />
                <h3 className="font-semibold text-brand-900">Aggregator Presence in {state.code}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {state.aggregatorPresence.map((agg) => (
                  <span
                    key={agg}
                    className="px-3 py-1 bg-white text-slate-700 rounded border border-slate-200 text-sm"
                  >
                    {agg}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-900 mb-8">
              FNS50322 Providers Serving {state.code}
            </h2>

            {stateProviders.length > 0 ? (
              <div className="space-y-4">
                {stateProviders.slice(0, 6).map((provider) => (
                  <div
                    key={provider.id}
                    className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold text-brand-900">{provider.name}</h3>
                          {provider.verified && (
                            <CheckCircle className="w-5 h-5 text-brand-600" />
                          )}
                        </div>
                        <p className="text-sm text-slate-600 mb-2">{provider.location}</p>
                        <div className="flex flex-wrap gap-2">
                          {provider.deliveryModes.slice(0, 2).map((mode) => (
                            <span
                              key={mode}
                              className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                            >
                              {mode}
                            </span>
                          ))}
                          {provider.pricing.fns50322.fundingEligible && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                              VET Loan
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-2xl font-bold text-brand-700 mb-1">
                          {formatCurrency(provider.pricing.fns50322.price)}
                        </p>
                        <p className="text-sm text-slate-500 mb-3">
                          {provider.pricing.fns50322.duration}
                        </p>
                        <Button asChild size="sm">
                          <Link href={`/providers/${provider.slug}`}>
                            View Details <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {stateProviders.length > 6 && (
                  <div className="text-center pt-4">
                    <Button asChild variant="outline">
                      <Link href="/compare">
                        View All {stateProviders.length} Providers
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center bg-white rounded-xl p-8 border border-slate-200">
                <p className="text-slate-600 mb-4">
                  Limited local providers in {state.name}, but many national online
                  providers deliver to {state.code}.
                </p>
                <Button asChild>
                  <Link href="/compare">View All Online Providers</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Other States */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-brand-900 mb-6 text-center">
            Other State Guides
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {states
              .filter((s) => s.slug !== state.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-brand-100 hover:text-brand-700 transition-colors"
                >
                  {s.code}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-brand-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start in {state.code}?
          </h2>
          <p className="text-brand-200 mb-6">
            Take our quiz to find the best FNS50322 provider for your needs.
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
              <Link href="/compare">Compare All Providers</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
