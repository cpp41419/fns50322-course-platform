import { FAQItem, FAQCategory } from "@/types/provider";

export const faqCategories: FAQCategory[] = [
  {
    id: "course-basics",
    name: "Course Basics",
    description: "Essential information about FNS50322 Diploma",
    icon: "BookOpen",
    count: 8,
  },
  {
    id: "provider-selection",
    name: "Provider Selection",
    description: "How to choose the right RTO for your needs",
    icon: "Users",
    count: 6,
  },
  {
    id: "costs-funding",
    name: "Costs & Funding",
    description: "Pricing, VET loans, and payment options",
    icon: "DollarSign",
    count: 7,
  },
  {
    id: "career-licensing",
    name: "Career & Licensing",
    description: "MFAA, FBAA membership and career pathways",
    icon: "Briefcase",
    count: 8,
  },
  {
    id: "study-modes",
    name: "Study Modes",
    description: "Online, blended, and face-to-face options",
    icon: "Monitor",
    count: 5,
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "what-is-fns50322",
    question: "What is FNS50322 Diploma of Finance and Mortgage Broking Management?",
    answer: "FNS50322 is the nationally recognized qualification required to become a licensed mortgage broker in Australia. It supersedes FNS50320 and is the current 2026 industry standard. The diploma covers credit law, needs analysis, loan product knowledge, responsible lending obligations, and professional practice. Completion of this qualification is mandatory for MFAA and FBAA membership, which is required to operate as a mortgage broker.",
    category: "course-basics",
    tags: ["fns50322", "diploma", "mortgage broker", "qualification"],
    helpful: 234,
    views: 4521,
    lastUpdated: "2026-01-01",
    featured: true,
    relatedQuestions: ["fns50322-vs-fns50320", "how-long-to-complete", "mfaa-vs-fbaa"],
  },
  {
    id: "fns50322-vs-fns50320",
    question: "What's the difference between FNS50322 and FNS50320?",
    answer: "FNS50322 is the updated version of FNS50320, incorporating the latest regulatory changes including enhanced responsible lending requirements, updated credit law provisions, and new consumer protection measures. If you're starting fresh, you should enrol in FNS50322 as it meets current 2026 requirements. Those who completed FNS50320 may need to complete gap training depending on when they qualified.",
    category: "course-basics",
    tags: ["fns50320", "fns50322", "comparison", "supersedes"],
    helpful: 189,
    views: 3245,
    lastUpdated: "2026-01-01",
    featured: true,
    relatedQuestions: ["what-is-fns50322", "how-long-to-complete"],
  },
  {
    id: "how-long-to-complete",
    question: "How long does FNS50322 take to complete?",
    answer: "Course duration varies by provider and study mode: Fast-track intensive: 3-4 months (full-time study), Standard online: 6-12 months (part-time), Blended learning: 6-9 months. The course involves approximately 720-800 nominal hours of study. Most students studying part-time while working complete it in 6-9 months. RPL (Recognition of Prior Learning) can significantly reduce study time for those with existing finance industry experience.",
    category: "course-basics",
    tags: ["duration", "timeline", "study time", "completion"],
    helpful: 156,
    views: 2890,
    lastUpdated: "2025-12-15",
    featured: true,
    relatedQuestions: ["what-is-fns50322", "can-i-study-while-working"],
  },
  {
    id: "course-cost",
    question: "How much does the FNS50322 course cost?",
    answer: "FNS50322 course costs range from $3,500 to $6,000+ depending on the provider, delivery mode, and inclusions. Government subsidized options (TAFE) start around $3,500. Private RTOs typically charge $4,500-$5,500. Premium providers with mentorship and aggregator connections may charge up to $6,000+. VET Student Loans are available for eligible students, allowing you to defer payment until you're earning above the threshold.",
    category: "costs-funding",
    tags: ["cost", "price", "fees", "vet student loan"],
    helpful: 198,
    views: 4123,
    lastUpdated: "2026-01-01",
    featured: true,
    relatedQuestions: ["vet-student-loans", "hidden-fees"],
  },
  {
    id: "vet-student-loans",
    question: "Can I get a VET Student Loan for FNS50322?",
    answer: "Yes, FNS50322 is an approved qualification for VET Student Loans (VSL). This government loan scheme allows eligible Australian citizens to defer their course fees. You only start repaying once your income exceeds the minimum threshold (currently around $54,000/year). Not all RTOs are VSL approved, so check with your chosen provider. You'll need to meet citizenship requirements and provide a valid USI (Unique Student Identifier).",
    category: "costs-funding",
    tags: ["vet student loan", "funding", "government loan", "defer fees"],
    helpful: 167,
    views: 2654,
    lastUpdated: "2025-12-20",
    featured: false,
    relatedQuestions: ["course-cost", "payment-plans"],
  },
  {
    id: "mfaa-vs-fbaa",
    question: "What's the difference between MFAA and FBAA membership?",
    answer: "MFAA (Mortgage & Finance Association of Australia) and FBAA (Finance Brokers Association of Australia) are the two main industry bodies for mortgage brokers. Both require FNS50322 for membership. MFAA is larger with more lender relationships and is often preferred by major aggregators. FBAA offers competitive fees and strong advocacy. Many brokers hold both memberships. Your choice may depend on which aggregator you join, as some have preferences.",
    category: "career-licensing",
    tags: ["mfaa", "fbaa", "membership", "industry body"],
    helpful: 145,
    views: 2341,
    lastUpdated: "2025-12-18",
    featured: true,
    relatedQuestions: ["what-is-aggregator", "how-to-become-broker"],
  },
  {
    id: "what-is-aggregator",
    question: "What is an aggregator and do I need one?",
    answer: "An aggregator is a company that provides mortgage brokers access to multiple lender products, software systems, compliance support, and often training. Major aggregators include Connective, AFG, Finsure, PLAN, and Loan Market. As a new broker, you'll need to join an aggregator to access lender panels and operate legally. Some FNS50322 providers have partnerships with aggregators that can help with placement after graduation.",
    category: "career-licensing",
    tags: ["aggregator", "lender panel", "connective", "afg"],
    helpful: 134,
    views: 1987,
    lastUpdated: "2025-12-15",
    featured: false,
    relatedQuestions: ["mfaa-vs-fbaa", "broker-salary"],
  },
  {
    id: "broker-salary",
    question: "How much do mortgage brokers earn in Australia?",
    answer: "Mortgage broker earnings vary significantly based on experience, volume, and business model. First-year brokers typically earn $60,000-$80,000. Established brokers (3-5 years) often earn $100,000-$150,000. Top performers can exceed $250,000-$500,000+. Income is primarily commission-based, with upfront commissions around 0.5-0.7% of loan value and trailing commissions of 0.15-0.20% annually. Many brokers also receive sign-on bonuses from aggregators.",
    category: "career-licensing",
    tags: ["salary", "income", "earnings", "commission"],
    helpful: 212,
    views: 5234,
    lastUpdated: "2026-01-01",
    featured: true,
    relatedQuestions: ["how-to-become-broker", "what-is-aggregator"],
  },
  {
    id: "online-vs-classroom",
    question: "Should I study FNS50322 online or in a classroom?",
    answer: "Both options can lead to success. Online study offers flexibility to work while studying, self-paced progression, and is often more affordable. Classroom/blended learning provides face-to-face interaction, structured deadlines, and networking opportunities. Consider your learning style, work commitments, and location. Many successful brokers completed online courses. The key is choosing a quality RTO with good support regardless of delivery mode.",
    category: "study-modes",
    tags: ["online", "classroom", "blended", "study mode"],
    helpful: 123,
    views: 1876,
    lastUpdated: "2025-12-10",
    featured: false,
    relatedQuestions: ["how-long-to-complete", "can-i-study-while-working"],
  },
  {
    id: "can-i-study-while-working",
    question: "Can I complete FNS50322 while working full-time?",
    answer: "Absolutely. Most FNS50322 students study while working full-time. Online and blended options are designed for this. Expect to dedicate 10-15 hours per week to study. Many RTOs offer evening webinars and weekend workshops. Self-paced online courses let you study at any time. Some students even complete practical components during work hours if employed in related roles (banking, real estate, financial planning).",
    category: "study-modes",
    tags: ["part-time", "working", "flexible", "study hours"],
    helpful: 98,
    views: 1543,
    lastUpdated: "2025-12-05",
    featured: false,
    relatedQuestions: ["how-long-to-complete", "online-vs-classroom"],
  },
  {
    id: "how-to-become-broker",
    question: "What are the steps to become a mortgage broker in Australia?",
    answer: "1) Complete FNS50322 Diploma of Finance and Mortgage Broking Management. 2) Apply for MFAA or FBAA membership. 3) Join an aggregator (Connective, AFG, etc.). 4) Register as a Credit Representative under your aggregator's ACL. 5) Complete any additional aggregator training requirements. 6) Set up your business structure (sole trader, company, etc.). 7) Obtain professional indemnity insurance. 8) Start writing loans! The entire process typically takes 6-12 months from course start to first loan settlement.",
    category: "career-licensing",
    tags: ["become broker", "steps", "process", "career path"],
    helpful: 178,
    views: 3456,
    lastUpdated: "2026-01-01",
    featured: true,
    relatedQuestions: ["what-is-fns50322", "mfaa-vs-fbaa", "what-is-aggregator"],
  },
  {
    id: "core-modules",
    question: "What are the core modules in FNS50322?",
    answer: "Key FNS50322 modules include: FNSINC511 (Conduct appropriate needs analysis - the 'Fact Find'), FNSCRD501 (Respond to personal and business financial situations), FNSFMB512 (Identify and select suitable credit products), FNSFMB513 (Prepare and present credit proposals), BSBPEF501 (Manage personal and professional development). Additional modules cover compliance, client relationships, and responsible lending. Total of 12 units required for completion.",
    category: "course-basics",
    tags: ["modules", "units", "curriculum", "subjects"],
    helpful: 89,
    views: 1234,
    lastUpdated: "2025-12-01",
    featured: false,
    relatedQuestions: ["what-is-fns50322", "how-long-to-complete"],
  },
];

export function getFeaturedFAQs(): FAQItem[] {
  return faqItems.filter((faq) => faq.featured);
}

export function getFAQsByCategory(categoryId: string): FAQItem[] {
  return faqItems.filter((faq) => faq.category === categoryId);
}

export function searchFAQs(query: string): FAQItem[] {
  const lowercaseQuery = query.toLowerCase();
  return faqItems.filter(
    (faq) =>
      faq.question.toLowerCase().includes(lowercaseQuery) ||
      faq.answer.toLowerCase().includes(lowercaseQuery) ||
      faq.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}
