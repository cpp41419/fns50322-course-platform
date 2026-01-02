import { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  CheckCircle,
  Clock,
  DollarSign,
  FileCheck,
  Users,
  Building,
  Shield,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Scale,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  licensingOverview,
  licensingPathway,
  licenseTypes,
  industryBodies,
  majorAggregators,
  piInsuranceInfo,
  cpdRequirements,
  stateRequirements,
  commonMistakes,
  timelineEstimate,
  costEstimate,
} from "@/data/licensing";

export const metadata: Metadata = {
  title: "Mortgage Broker Licensing Australia 2026 | Complete Guide",
  description:
    "Complete guide to mortgage broker licensing in Australia. FNS50322 to first loan: MFAA/FBAA membership, aggregator selection, Credit Representative registration, PI insurance.",
  keywords: [
    "mortgage broker licence",
    "credit representative",
    "MFAA membership",
    "FBAA membership",
    "mortgage broker aggregator",
    "ACL credit licence",
    "PI insurance broker",
  ],
};

export default function LicensingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                Licensing Guide
              </span>
              <span className="text-sm text-slate-500">Updated January 2026</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              {licensingOverview.title}
            </h1>

            <p className="text-lg text-slate-600 mb-6">
              {licensingOverview.description}
            </p>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold text-brand-900 mb-4">Key Points</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {licensingOverview.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Cost Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-brand-50 rounded-xl p-6 border border-brand-200">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-brand-700" />
                  <h3 className="font-semibold text-brand-900">Timeline</h3>
                </div>
                <p className="text-3xl font-bold text-brand-700 mb-2">
                  {timelineEstimate.typical}
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Typical time from starting FNS50322 to first loan
                </p>
                <p className="text-xs text-slate-500">
                  Fast-track: {timelineEstimate.minimum} | {timelineEstimate.note}
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-brand-700" />
                  <h3 className="font-semibold text-brand-900">Setup Costs</h3>
                </div>
                <p className="text-3xl font-bold text-brand-700 mb-2">
                  {costEstimate.total}
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Total initial investment
                </p>
                <p className="text-xs text-slate-500">
                  {costEstimate.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Step Pathway */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-900 mb-2">
              8-Step Licensing Pathway
            </h2>
            <p className="text-slate-600 mb-8">
              From FNS50322 enrolment to writing your first loan
            </p>

            <div className="space-y-4">
              {licensingPathway.map((step) => (
                <details
                  key={step.step}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden group"
                >
                  <summary className="p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-brand-900">{step.title}</h3>
                        <p className="text-sm text-slate-600">{step.description}</p>
                      </div>
                      <div className="hidden md:flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {step.timeframe}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {step.cost}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                    </div>
                  </summary>

                  <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-brand-900 mb-3">Details</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-brand-900 mb-3">Tips</h4>
                        <ul className="space-y-2">
                          {step.tips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                              <span className="text-brand-600">→</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                        {step.links && step.links.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {step.links.map((link, i) => (
                              <a
                                key={i}
                                href={link.url}
                                target={link.url.startsWith("http") ? "_blank" : undefined}
                                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="inline-flex items-center gap-1 text-sm text-brand-700 hover:underline"
                              >
                                {link.label}
                                {link.url.startsWith("http") && <ExternalLink className="w-3 h-3" />}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* License Types */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-900 mb-2">
              License Types
            </h2>
            <p className="text-slate-600 mb-8">
              Understanding Credit Representative vs Own ACL
            </p>

            <div className="space-y-6">
              {licenseTypes.map((license) => (
                <div
                  key={license.id}
                  className={`rounded-xl border p-6 ${
                    license.id === "credit-rep"
                      ? "border-brand-300 bg-brand-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-brand-900">{license.name}</h3>
                      <p className="text-slate-600">{license.description}</p>
                    </div>
                    {license.id === "credit-rep" && (
                      <span className="px-3 py-1 bg-brand-700 text-white rounded-full text-xs font-medium">
                        Recommended Start
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-500 mb-4">{license.typicalPath}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-800 mb-2">Pros</h4>
                      <ul className="space-y-1">
                        {license.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-800 mb-2">Cons</h4>
                      <ul className="space-y-1">
                        {license.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Bodies */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-brand-700" />
              <h2 className="text-2xl font-bold text-brand-900">
                Industry Bodies: MFAA vs FBAA
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {industryBodies.map((body) => (
                <div key={body.id} className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-brand-900">{body.abbreviation}</h3>
                    <span className="text-sm text-slate-500">{body.membershipCost}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{body.name}</p>

                  <h4 className="font-medium text-brand-900 mb-2">Benefits</h4>
                  <ul className="space-y-1 mb-4">
                    {body.benefits.slice(0, 5).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="p-3 bg-slate-50 rounded-lg mb-4">
                    <p className="text-xs text-slate-500">Lender Access</p>
                    <p className="text-sm text-slate-700">{body.lenderAccess}</p>
                  </div>

                  <p className="text-sm text-brand-700 font-medium">{body.recommendation}</p>

                  <a
                    href={body.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-4 text-sm text-brand-600 hover:underline"
                  >
                    Visit {body.abbreviation} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aggregators */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-6 h-6 text-brand-700" />
              <h2 className="text-2xl font-bold text-brand-900">
                Major Aggregators
              </h2>
            </div>

            <p className="text-slate-600 mb-6">
              Aggregators provide your lender access, software, and ACL authorisation.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left p-4 font-semibold text-brand-900">Aggregator</th>
                    <th className="text-left p-4 font-semibold text-brand-900">Lenders</th>
                    <th className="text-left p-4 font-semibold text-brand-900">Commission Split</th>
                    <th className="text-left p-4 font-semibold text-brand-900">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {majorAggregators.map((agg, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="p-4">
                        <span className="font-medium text-slate-900">{agg.name}</span>
                        <span className={`ml-2 px-2 py-0.5 rounded text-xs ${
                          agg.type === "Major" ? "bg-brand-100 text-brand-700" : "bg-slate-100 text-slate-600"
                        }`}>
                          {agg.type}
                        </span>
                      </td>
                      <td className="p-4 text-slate-600">{agg.lenderPanel}</td>
                      <td className="p-4 text-slate-600">{agg.commissionSplit}</td>
                      <td className="p-4 text-slate-600">{agg.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 mt-4">
              Commission splits and fees vary based on volume and experience. Always confirm current terms directly.
            </p>
          </div>
        </div>
      </section>

      {/* PI Insurance */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-brand-700" />
              <h2 className="text-2xl font-bold text-brand-900">
                {piInsuranceInfo.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="font-semibold text-brand-900 mb-4">Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-500">Minimum Coverage</p>
                    <p className="text-2xl font-bold text-brand-700">{piInsuranceInfo.minimumCoverage}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Typical Cost (New Broker)</p>
                    <p className="text-lg font-semibold text-slate-900">{piInsuranceInfo.typicalCost}</p>
                  </div>
                </div>

                <h4 className="font-medium text-brand-900 mt-6 mb-2">Coverage Includes</h4>
                <ul className="space-y-1">
                  {piInsuranceInfo.coverage.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="font-semibold text-brand-900 mb-4">Tips</h3>
                <ul className="space-y-3">
                  {piInsuranceInfo.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-brand-600 font-bold">{i + 1}.</span>
                      {tip}
                    </li>
                  ))}
                </ul>

                <h4 className="font-medium text-brand-900 mt-6 mb-2">Factors Affecting Premium</h4>
                <ul className="space-y-1">
                  {piInsuranceInfo.factors.map((factor, i) => (
                    <li key={i} className="text-sm text-slate-600">• {factor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CPD Requirements */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-brand-700" />
              <h2 className="text-2xl font-bold text-brand-900">
                {cpdRequirements.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-brand-900 mb-4">MFAA Requirements</h3>
                <p className="text-3xl font-bold text-brand-700 mb-1">
                  {cpdRequirements.mfaa.pointsRequired} points
                </p>
                <p className="text-sm text-slate-500 mb-4">{cpdRequirements.mfaa.period}</p>
                <p className="text-sm text-slate-600">{cpdRequirements.mfaa.notes}</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-brand-900 mb-4">FBAA Requirements</h3>
                <p className="text-3xl font-bold text-brand-700 mb-1">
                  {cpdRequirements.fbaa.pointsRequired} points
                </p>
                <p className="text-sm text-slate-500 mb-4">{cpdRequirements.fbaa.period}</p>
                <p className="text-sm text-slate-600">{cpdRequirements.fbaa.notes}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-brand-900 mb-3">CPD Sources</h4>
                <ul className="space-y-2">
                  {cpdRequirements.sources.map((source, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-brand-900 mb-3">Tips</h4>
                <ul className="space-y-2">
                  {cpdRequirements.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-brand-600">→</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-red-900">
                Common Mistakes to Avoid
              </h2>
            </div>

            <div className="space-y-4">
              {commonMistakes.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-red-200">
                  <h4 className="font-medium text-red-800 mb-2">{item.mistake}</h4>
                  <p className="text-sm text-red-700 mb-2">
                    <strong>Consequence:</strong> {item.consequence}
                  </p>
                  <p className="text-sm text-slate-600">
                    <strong className="text-green-700">Prevention:</strong> {item.prevention}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* State Requirements */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-6 h-6 text-brand-700" />
              <h2 className="text-2xl font-bold text-brand-900">
                State-by-State Requirements
              </h2>
            </div>

            <div className="bg-brand-50 rounded-xl p-6 border border-brand-200 mb-6">
              <h3 className="font-semibold text-brand-900 mb-3">{stateRequirements.national.title}</h3>
              <ul className="grid md:grid-cols-2 gap-2">
                {stateRequirements.national.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {stateRequirements.stateSpecific.map((state) => (
                <div key={state.state} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-brand-900">{state.state}</h4>
                    <Link
                      href={`/${state.state.toLowerCase()}`}
                      className="text-xs text-brand-600 hover:underline"
                    >
                      State Guide →
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">{state.body}</p>
                  <p className="text-sm text-slate-600">{state.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-6 h-6 text-brand-700" />
              <h2 className="text-2xl font-bold text-brand-900">
                Cost Breakdown
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-brand-900 mb-4">Initial Setup Costs</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {costEstimate.items.map((item, i) => (
                      <tr key={i} className="border-b border-slate-100">
                        <td className="py-2 text-slate-600">{item.item}</td>
                        <td className="py-2 text-right font-medium text-slate-900">{item.range}</td>
                      </tr>
                    ))}
                    <tr className="bg-brand-50">
                      <td className="py-3 font-semibold text-brand-900">Total</td>
                      <td className="py-3 text-right font-bold text-brand-700">{costEstimate.total}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-brand-900 mb-4">Ongoing Annual Costs</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {costEstimate.ongoingAnnual.map((item, i) => (
                      <tr key={i} className="border-b border-slate-100">
                        <td className="py-2 text-slate-600">{item.item}</td>
                        <td className="py-2 text-right font-medium text-slate-900">{item.range}</td>
                      </tr>
                    ))}
                    <tr className="bg-slate-50">
                      <td className="py-3 font-semibold text-slate-900">Annual Total</td>
                      <td className="py-3 text-right font-bold text-slate-700">{costEstimate.ongoingTotal}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-brand-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Licensing Journey?
          </h2>
          <p className="text-brand-200 mb-6 max-w-2xl mx-auto">
            Step 1 is completing FNS50322. Compare providers and find the right course for you.
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
