import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, CheckCircle, ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { coreModules, electiveModules, getTotalHours } from "@/data/modules";

export const metadata: Metadata = {
  title: "FNS50322 Modules & Units | Complete Course Breakdown",
  description: "Complete breakdown of all 12 FNS50322 units. FNSINC511, FNSCRD501, FNSFMB512 explained. Assessment requirements, study hours, and what you'll learn in each module.",
  keywords: [
    "FNS50322 modules",
    "FNS50322 units",
    "FNSINC511",
    "FNSCRD501",
    "FNSFMB512",
    "mortgage broker course units",
    "FNS50322 curriculum",
  ],
};

export default function ModulesPage() {
  const totalHours = getTotalHours();

  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <GraduationCap className="w-4 h-4" />
              Complete Curriculum
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              FNS50322 Course Modules
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              The Diploma of Finance and Mortgage Broking Management consists of
              10 core units and 2-4 elective units. Total nominal hours: {totalHours}+
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-600" />
                <span><strong>10</strong> Core Units</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-600" />
                <span><strong>{totalHours}</strong> Nominal Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-600" />
                <span><strong>ASQA</strong> Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-900 mb-2">Core Units</h2>
            <p className="text-slate-600 mb-8">
              All 10 core units must be completed to receive your FNS50322 qualification.
            </p>

            <div className="space-y-4">
              {coreModules.map((module, index) => (
                <div
                  key={module.code}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-brand-300 transition-colors"
                >
                  <details className="group">
                    <summary className="flex items-start gap-4 p-5 cursor-pointer list-none">
                      <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center text-brand-700 font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-mono text-sm text-brand-600 mb-1">
                              {module.code}
                            </p>
                            <h3 className="font-semibold text-brand-900 leading-tight">
                              {module.name}
                            </h3>
                            {module.aka && (
                              <p className="text-sm text-slate-500 mt-1">
                                Known as: &quot;{module.aka}&quot;
                              </p>
                            )}
                          </div>
                          <div className="text-right flex-shrink-0">
                            <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                              <Clock className="w-4 h-4" />
                              {module.hours}h
                            </span>
                          </div>
                        </div>
                      </div>
                    </summary>
                    <div className="px-5 pb-5 pt-0 ml-14">
                      <p className="text-slate-600 leading-relaxed">
                        {module.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <h4 className="text-sm font-semibold text-brand-900 mb-2">
                          What You&apos;ll Learn:
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                            Industry-standard practices
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                            Real-world case studies
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                            Compliance requirements
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                            Practical assessments
                          </li>
                        </ul>
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Elective Modules */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-900 mb-2">Elective Units</h2>
            <p className="text-slate-600 mb-8">
              Choose 2-4 elective units based on your career interests. Popular choices
              include commercial lending and SMSF lending.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {electiveModules.map((module) => (
                <div
                  key={module.code}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:border-brand-300 transition-colors"
                >
                  <p className="font-mono text-sm text-brand-600 mb-1">{module.code}</p>
                  <h3 className="font-semibold text-brand-900 mb-2">{module.name}</h3>
                  {module.aka && (
                    <span className="inline-block px-2 py-1 bg-brand-50 text-brand-700 rounded text-xs mb-3">
                      {module.aka}
                    </span>
                  )}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-slate-500 mt-3">
                    <Clock className="w-4 h-4" />
                    {module.hours} hours
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-900 mb-6 text-center">
              Assessment Methods
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-brand-50 rounded-xl">
                <div className="w-12 h-12 bg-brand-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-brand-900 mb-2">Written Assessments</h3>
                <p className="text-sm text-slate-600">
                  Short answer questions, case study analysis, and compliance scenarios.
                </p>
              </div>

              <div className="text-center p-6 bg-brand-50 rounded-xl">
                <div className="w-12 h-12 bg-brand-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-brand-900 mb-2">Practical Tasks</h3>
                <p className="text-sm text-slate-600">
                  Complete loan applications, credit assessments, and client interviews.
                </p>
              </div>

              <div className="text-center p-6 bg-brand-50 rounded-xl">
                <div className="w-12 h-12 bg-brand-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-brand-900 mb-2">Portfolio Evidence</h3>
                <p className="text-sm text-slate-600">
                  Compile evidence of skills through simulated broker activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-brand-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your FNS50322?
          </h2>
          <p className="text-brand-200 mb-6 max-w-xl mx-auto">
            Compare providers and find the best fit for your learning style and budget.
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
