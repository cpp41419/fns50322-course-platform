"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle, Clock, DollarSign, MapPin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { providers } from "@/data/providers";
import { formatCurrency } from "@/lib/utils";

interface QuizAnswer {
  budget?: string;
  timeline?: string;
  studyMode?: string;
  state?: string;
  experience?: string;
}

const questions = [
  {
    id: "budget",
    question: "What's your budget for the FNS50322 course?",
    icon: DollarSign,
    options: [
      { value: "under-4000", label: "Under $4,000", description: "Budget-friendly options" },
      { value: "4000-5000", label: "$4,000 - $5,000", description: "Mid-range with good support" },
      { value: "over-5000", label: "Over $5,000", description: "Premium with mentorship" },
      { value: "vet-loan", label: "VET Student Loan", description: "Defer payment until earning" },
    ],
  },
  {
    id: "timeline",
    question: "How quickly do you want to complete the course?",
    icon: Clock,
    options: [
      { value: "fast", label: "3-4 months", description: "Fast-track intensive study" },
      { value: "standard", label: "6-9 months", description: "Balanced pace while working" },
      { value: "flexible", label: "9-12 months", description: "Relaxed self-paced learning" },
    ],
  },
  {
    id: "studyMode",
    question: "How do you prefer to study?",
    icon: BookOpen,
    options: [
      { value: "online", label: "100% Online", description: "Study anywhere, anytime" },
      { value: "blended", label: "Blended", description: "Online + face-to-face workshops" },
      { value: "face-to-face", label: "Classroom", description: "Traditional campus learning" },
    ],
  },
  {
    id: "state",
    question: "Which state are you located in?",
    icon: MapPin,
    options: [
      { value: "NSW", label: "New South Wales", description: "" },
      { value: "VIC", label: "Victoria", description: "" },
      { value: "QLD", label: "Queensland", description: "" },
      { value: "WA", label: "Western Australia", description: "" },
      { value: "SA", label: "South Australia", description: "" },
      { value: "other", label: "Other (TAS/NT/ACT)", description: "" },
    ],
  },
  {
    id: "experience",
    question: "Do you have prior finance industry experience?",
    icon: CheckCircle,
    options: [
      { value: "none", label: "No experience", description: "Starting fresh in finance" },
      { value: "some", label: "Some experience", description: "Banking, lending, or real estate" },
      { value: "significant", label: "Significant experience", description: "May qualify for RPL" },
    ],
  },
];

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getMatchedProviders = () => {
    let matched = [...providers];

    // Filter by state
    if (answers.state && answers.state !== "other") {
      matched = matched.filter((p) => p.states.includes(answers.state!));
    }

    // Filter by budget
    if (answers.budget === "under-4000") {
      matched = matched.filter((p) => p.pricing.fns50322.price < 4000);
    } else if (answers.budget === "4000-5000") {
      matched = matched.filter(
        (p) => p.pricing.fns50322.price >= 4000 && p.pricing.fns50322.price <= 5000
      );
    } else if (answers.budget === "vet-loan") {
      matched = matched.filter((p) => p.pricing.fns50322.fundingEligible);
    }

    // Filter by study mode
    if (answers.studyMode === "online") {
      matched = matched.filter((p) => p.deliveryModes.includes("Online"));
    } else if (answers.studyMode === "face-to-face") {
      matched = matched.filter((p) => p.deliveryModes.includes("Face-to-face"));
    }

    // Sort by rating
    matched.sort((a, b) => b.rating - a.rating);

    return matched.slice(0, 3);
  };

  if (showResults) {
    const matchedProviders = getMatchedProviders();

    return (
      <section className="py-16 bg-gradient-to-b from-brand-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-brand-700" />
              </div>
              <h1 className="text-3xl font-bold text-brand-900 mb-4">
                Your Top FNS50322 Matches
              </h1>
              <p className="text-slate-600">
                Based on your preferences, here are the best providers for you:
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {matchedProviders.map((provider, index) => (
                <div
                  key={provider.id}
                  className={`bg-white rounded-xl border-2 p-6 ${
                    index === 0 ? "border-brand-500 ring-4 ring-brand-100" : "border-slate-200"
                  }`}
                >
                  {index === 0 && (
                    <span className="inline-block bg-brand-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      Best Match
                    </span>
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-brand-900 mb-2">
                        {provider.name}
                      </h2>
                      <p className="text-slate-600 mb-3">{provider.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {provider.highlights.slice(0, 3).map((h) => (
                          <span
                            key={h}
                            className="px-2 py-1 bg-brand-50 text-brand-700 rounded text-xs"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-brand-700">
                        {formatCurrency(provider.pricing.fns50322.price)}
                      </p>
                      <p className="text-sm text-slate-500 mb-3">
                        {provider.pricing.fns50322.duration}
                      </p>
                      <Button asChild size="sm">
                        <Link href={`/providers/${provider.slug}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/compare">See All {providers.length} Providers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-brand-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-slate-500 mb-2">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <currentQuestion.icon className="w-7 h-7 text-brand-700" />
              </div>
              <h1 className="text-2xl font-bold text-brand-900">
                {currentQuestion.question}
              </h1>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all hover:border-brand-500 hover:bg-brand-50 ${
                    answers[currentQuestion.id as keyof QuizAnswer] === option.value
                      ? "border-brand-500 bg-brand-50"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-brand-900">{option.label}</p>
                      {option.description && (
                        <p className="text-sm text-slate-500">{option.description}</p>
                      )}
                    </div>
                    <ArrowRight className="w-5 h-5 text-brand-400" />
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            {currentStep > 0 && (
              <div className="mt-6 pt-6 border-t border-slate-200">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-slate-500 hover:text-brand-700"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
