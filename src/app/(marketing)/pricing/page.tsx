import { Metadata } from "next";
import Link from "next/link";
import { DollarSign, CheckCircle, AlertCircle, TrendingDown, TrendingUp, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { providers } from "@/data/providers";
import { formatCurrency } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FNS50322 Course Pricing | Cost Comparison Guide",
  description: "Complete FNS50322 pricing guide. Compare course costs from $3,500 to $6,000+. VET Student Loans, payment plans, and hidden fees exposed.",
  keywords: ["FNS50322 cost", "mortgage broker course price", "diploma pricing", "VET student loan"],
};

export default function PricingPage() {
  const sortedByPrice = [...providers].sort(
    (a, b) => a.pricing.fns50322.price - b.pricing.fns50322.price
  );

  const lowestPrice = sortedByPrice[0].pricing.fns50322.price;
  const highestPrice = sortedByPrice[sortedByPrice.length - 1].pricing.fns50322.price;
  const averagePrice = Math.round(
    providers.reduce((sum, p) => sum + p.pricing.fns50322.price, 0) / providers.length
  );

  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <DollarSign className="w-4 h-4" />
              Transparent Pricing
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              FNS50322 Course Pricing Guide
            </h1>
            <p className="text-lg text-slate-600">
              Complete breakdown of Diploma of Finance and Mortgage Broking costs.
              No hidden fees. VET Student Loan options explained.
            </p>
          </div>
        </div>
      </section>

      {/* Price Overview */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200">
              <TrendingDown className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-3xl font-bold text-green-700">{formatCurrency(lowestPrice)}</p>
              <p className="text-sm text-green-600">Lowest Price</p>
            </div>
            <div className="bg-brand-50 rounded-xl p-6 text-center border border-brand-200">
              <DollarSign className="w-8 h-8 text-brand-600 mx-auto mb-2" />
              <p className="text-3xl font-bold text-brand-700">{formatCurrency(averagePrice)}</p>
              <p className="text-sm text-brand-600">Average Price</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 text-center border border-amber-200">
              <TrendingUp className="w-8 h-8 text-amber-600 mx-auto mb-2" />
              <p className="text-3xl font-bold text-amber-700">{formatCurrency(highestPrice)}</p>
              <p className="text-sm text-amber-600">Premium Option</p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison Table */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-900 mb-8 text-center">
            Provider Price Comparison
          </h2>

          <div className="max-w-4xl mx-auto bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-brand-900">Provider</th>
                    <th className="text-left py-4 px-4 font-semibold text-brand-900">Price</th>
                    <th className="text-left py-4 px-4 font-semibold text-brand-900">VET Loan</th>
                    <th className="text-left py-4 px-4 font-semibold text-brand-900">Duration</th>
                    <th className="text-right py-4 px-6 font-semibold text-brand-900">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedByPrice.map((provider, index) => (
                    <tr
                      key={provider.id}
                      className={`border-b border-slate-100 ${
                        index === 0 ? "bg-green-50" : ""
                      }`}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          {index === 0 && (
                            <span className="px-2 py-0.5 bg-green-600 text-white text-xs font-bold rounded">
                              Lowest
                            </span>
                          )}
                          <div>
                            <p className="font-semibold text-brand-900">{provider.name}</p>
                            <p className="text-sm text-slate-500">{provider.location}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <p className="font-bold text-brand-700">
                          {formatCurrency(provider.pricing.fns50322.price)}
                        </p>
                        {provider.pricing.fns50322.discount && (
                          <p className="text-xs text-red-600">
                            Save {formatCurrency(provider.pricing.fns50322.discount)}
                          </p>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        {provider.pricing.fns50322.fundingEligible ? (
                          <span className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="w-4 h-4" /> Yes
                          </span>
                        ) : (
                          <span className="text-slate-400">No</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        {provider.pricing.fns50322.duration}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <Button asChild size="sm" variant="outline">
                          <Link href={`/providers/${provider.slug}`}>View</Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Options */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-900 mb-8 text-center">
              Funding Options Explained
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* VET Student Loans */}
              <div className="bg-brand-50 rounded-xl p-6 border border-brand-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-900 mb-2">VET Student Loans</h3>
                    <p className="text-slate-600 mb-4">
                      Government loan scheme that lets you defer course fees until you&apos;re
                      earning above the repayment threshold (~$54,000/year).
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5" />
                        <span>Australian citizens eligible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5" />
                        <span>No upfront payment required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5" />
                        <span>Income-contingent repayments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5" />
                        <span>20% loan fee applied to total</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Payment Plans */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-900 mb-2">Payment Plans</h3>
                    <p className="text-slate-600 mb-4">
                      Many RTOs offer interest-free payment plans, splitting the total cost
                      over several installments during your study.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5" />
                        <span>Often interest-free</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5" />
                        <span>Weekly, fortnightly, or monthly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5" />
                        <span>No long-term debt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5" />
                        <span>Payments during study period</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Fees Warning */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-amber-800 mb-2">
                  Watch Out for Hidden Fees
                </h2>
                <p className="text-amber-700 mb-4">
                  Some providers advertise low prices but add extra charges. Always ask about:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "RPL assessment fees",
                    "Material/textbook costs",
                    "Re-assessment charges",
                    "Extension fees",
                    "Certificate issuance",
                    "MFAA/FBAA application support",
                  ].map((fee) => (
                    <div key={fee} className="flex items-center gap-2 text-amber-800">
                      <Info className="w-4 h-4" />
                      <span className="text-sm">{fee}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-brand-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Find the Right Price for Your Budget
          </h2>
          <p className="text-brand-200 mb-6 max-w-xl mx-auto">
            Take our quiz to get personalized recommendations based on your budget and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-golden text-brand-900 hover:bg-yellow-400">
              <Link href="/quiz">Take the Quiz</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/compare">Compare All Providers</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
