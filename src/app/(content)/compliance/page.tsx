import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  FileCheck,
  Users,
  Scale,
  BookOpen,
  Search,
  AlertCircle,
  ChevronRight,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  asqaOverview,
  standardsForRTOs,
  fns50322SpecificRequirements,
  complianceChecklist,
  regulatoryActions,
  studentProtections,
  dueDiligenceSteps,
} from "@/data/compliance";

export const metadata: Metadata = {
  title: "ASQA Compliance Guide | FNS50322 RTO Standards & Student Rights",
  description:
    "Understand ASQA compliance for FNS50322 providers. Learn RTO standards, your student rights, how to verify providers, and what to do if things go wrong.",
  keywords: [
    "ASQA compliance",
    "RTO standards",
    "FNS50322 requirements",
    "training provider verification",
    "student rights VET",
    "RTO registration check",
  ],
};

export default function CompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                Compliance Guide
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              ASQA Compliance: Know Your Rights
            </h1>

            <p className="text-lg text-slate-600 mb-6">
              Before enrolling in FNS50322, understand how RTOs are regulated,
              what standards they must meet, and how to protect yourself from
              poor-quality providers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a
                  href="https://training.gov.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify an RTO <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/compare">Compare Verified Providers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ASQA Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-brand-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-900">
                  What is {asqaOverview.abbreviation}?
                </h2>
                <p className="text-slate-600">{asqaOverview.role}</p>
              </div>
            </div>

            <p className="text-slate-700 mb-6">{asqaOverview.description}</p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {asqaOverview.keyFunctions.map((func, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{func}</span>
                </div>
              ))}
            </div>

            <div className="bg-brand-50 rounded-xl p-6 border border-brand-200">
              <h3 className="font-semibold text-brand-900 mb-2">
                Why This Matters for FNS50322
              </h3>
              <p className="text-slate-700">
                To become a licensed mortgage broker, you need a nationally
                recognised FNS50322 qualification. Only ASQA-registered RTOs can
                issue this. Choosing an unregistered or non-compliant provider
                means your qualification may not be accepted by employers, MFAA,
                FBAA, or aggregators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RTO Standards */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-900 mb-2">
              Standards RTOs Must Meet
            </h2>
            <p className="text-slate-600 mb-8">
              The Standards for Registered Training Organisations (RTOs) 2015
              set out requirements every provider must meet.
            </p>

            <div className="space-y-6">
              {standardsForRTOs.map((standard) => (
                <details
                  key={standard.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden group"
                >
                  <summary className="p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                          <FileCheck className="w-5 h-5 text-brand-700" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-brand-900">
                            {standard.title}
                          </h3>
                          <p className="text-sm text-slate-600">
                            {standard.description}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                    </div>
                  </summary>

                  <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-brand-900 mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" /> What RTOs Must Do
                        </h4>
                        <ul className="space-y-2">
                          {standard.details.map((detail, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-slate-600"
                            >
                              <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-brand-900 mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4" /> Your Rights
                        </h4>
                        <ul className="space-y-2 mb-4">
                          {standard.studentRights.map((right, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-slate-600"
                            >
                              <BadgeCheck className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              {right}
                            </li>
                          ))}
                        </ul>

                        <h4 className="font-medium text-red-800 mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" /> Red Flags
                        </h4>
                        <ul className="space-y-2">
                          {standard.redFlags.map((flag, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-red-700"
                            >
                              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              {flag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FNS50322 Specific Requirements */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-900 mb-6">
              FNS50322 Specific Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-brand-900 mb-4">
                  Qualification Details
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm text-slate-500">Training Package</dt>
                    <dd className="font-medium text-slate-900">
                      {fns50322SpecificRequirements.trainingPackage}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">Qualification</dt>
                    <dd className="font-medium text-slate-900">
                      {fns50322SpecificRequirements.qualification}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">Supersedes</dt>
                    <dd className="font-medium text-slate-900">
                      {fns50322SpecificRequirements.supersedes}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">Units Required</dt>
                    <dd className="font-medium text-slate-900">
                      {fns50322SpecificRequirements.units.core} core +{" "}
                      {fns50322SpecificRequirements.units.elective} elective ={" "}
                      {fns50322SpecificRequirements.units.total} total
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="font-semibold text-amber-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Volume of Learning
                </h3>
                <p className="text-amber-800 mb-3">
                  <strong>Minimum:</strong>{" "}
                  {fns50322SpecificRequirements.volumeOfLearning.minimum}
                </p>
                <p className="text-amber-800 mb-3">
                  <strong>Typical duration:</strong>{" "}
                  {fns50322SpecificRequirements.volumeOfLearning.typical}
                </p>
                <p className="text-sm text-amber-700">
                  {fns50322SpecificRequirements.volumeOfLearning.note}
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-brand-900 mb-4">
                Trainer Requirements
              </h3>
              <p className="text-slate-600 mb-4">
                FNS50322 trainers must have both training qualifications AND
                current industry competency:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {fns50322SpecificRequirements.trainerRequirements.map(
                  (req, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-slate-700"
                    >
                      <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                      {req}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Due Diligence Checklist */}
      <section className="py-12 bg-brand-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Search className="w-6 h-6 text-brand-700" />
              <h2 className="text-2xl font-bold text-brand-900">
                5-Step Due Diligence Checklist
              </h2>
            </div>

            <p className="text-slate-600 mb-8">
              Before enrolling with any FNS50322 provider, complete these
              verification steps:
            </p>

            <div className="space-y-4">
              {dueDiligenceSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-white rounded-xl p-6 border border-brand-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-brand-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 mb-3">{step.action}</p>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {step.checkFor.map((check, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-slate-700"
                          >
                            <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                            {check}
                          </li>
                        ))}
                      </ul>
                      {step.link && (
                        <a
                          href={step.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-3 text-sm text-brand-700 hover:underline"
                        >
                          Visit resource{" "}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Enrolment Checklist */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-900 mb-6">
              Compliance Checklist by Stage
            </h2>

            <div className="space-y-8">
              {complianceChecklist.map((category) => (
                <div key={category.category}>
                  <h3 className="text-lg font-semibold text-brand-900 mb-4 pb-2 border-b border-slate-200">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((item, i) => (
                      <div
                        key={i}
                        className="bg-slate-50 rounded-xl p-5 border border-slate-200"
                      >
                        <h4 className="font-medium text-brand-900 mb-2">
                          {item.question}
                        </h4>
                        <p className="text-sm text-slate-600 mb-3">
                          {item.why}
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-green-800">
                              {item.greenFlag}
                            </span>
                          </div>
                          <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                            <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-red-800">
                              {item.redFlag}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Protections */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-6 h-6 text-brand-700" />
              <h2 className="text-2xl font-bold text-brand-900">
                Your Protections
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-brand-900 mb-3">
                  {studentProtections.vet.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  {studentProtections.vet.description}
                </p>
                <ul className="space-y-2">
                  {studentProtections.vet.protections.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-brand-900 mb-3">
                  {studentProtections.consumer.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  {studentProtections.consumer.description}
                </p>
                <ul className="space-y-2">
                  {studentProtections.consumer.protections.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Complaint Pathway */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold text-brand-900 mb-4">
                {studentProtections.complaints.title}
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {studentProtections.complaints.steps.map((step) => (
                  <div
                    key={step.level}
                    className="relative p-4 bg-slate-50 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-brand-700 rounded-full flex items-center justify-center text-white font-bold text-sm mb-3">
                      {step.level}
                    </div>
                    <h4 className="font-medium text-brand-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 mb-2">
                      {step.description}
                    </p>
                    <p className="text-xs text-slate-500">{step.timeframe}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Actions */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-900 mb-2">
              {regulatoryActions.title}
            </h2>
            <p className="text-slate-600 mb-6">
              {regulatoryActions.description}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left p-4 font-semibold text-brand-900">
                      Action Type
                    </th>
                    <th className="text-left p-4 font-semibold text-brand-900">
                      Severity
                    </th>
                    <th className="text-left p-4 font-semibold text-brand-900">
                      Meaning
                    </th>
                    <th className="text-left p-4 font-semibold text-brand-900">
                      Student Impact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {regulatoryActions.actions.map((action, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="p-4 font-medium text-slate-900">
                        {action.type}
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            action.severity === "Critical"
                              ? "bg-red-100 text-red-800"
                              : action.severity === "High"
                              ? "bg-orange-100 text-orange-800"
                              : action.severity === "Medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-slate-100 text-slate-800"
                          }`}
                        >
                          {action.severity}
                        </span>
                      </td>
                      <td className="p-4 text-slate-600">{action.meaning}</td>
                      <td className="p-4 text-slate-600">
                        {action.studentImpact}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              {regulatoryActions.checkHistory}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-brand-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Compare ASQA-Compliant Providers
          </h2>
          <p className="text-brand-200 mb-6 max-w-2xl mx-auto">
            All providers in our comparison are ASQA-registered with FNS50322
            on their scope. We verify registration status monthly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-golden text-brand-900 hover:bg-yellow-400"
            >
              <Link href="/compare">Compare Providers</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <a
                href="https://training.gov.au/Search/SearchOrganisation?nrtCodeTitle=FNS50322"
                target="_blank"
                rel="noopener noreferrer"
              >
                Search training.gov.au <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
