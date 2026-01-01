import { CourseModule } from "@/types/provider";

export const coreModules: CourseModule[] = [
  {
    code: "FNSINC511",
    name: "Conduct Appropriate Client Identification for Financial Services Interactions",
    description: "Learn to verify client identity, conduct needs analysis, and gather comprehensive financial information. This is the 'Fact Find' module - the foundation of responsible lending. Covers AML/CTF requirements, document verification, and client profiling techniques used by mortgage brokers.",
    hours: 60,
    category: "core",
    aka: "The Fact Find",
  },
  {
    code: "FNSCRD501",
    name: "Assess Credit Applications and Make Recommendations",
    description: "Evaluate credit applications against lender criteria, assess borrower capacity, and make informed lending recommendations. Covers credit impairment scenarios, debt-to-income ratios, serviceability calculations, and dealing with complex financial situations.",
    hours: 80,
    category: "core",
    aka: "Credit Assessment",
  },
  {
    code: "FNSFMB512",
    name: "Identify Suitable Credit Products",
    description: "Compare and contrast credit products from multiple lenders. Learn product features, interest rate structures, fees, and features of residential loans, commercial loans, SMSF lending, and specialist lending products.",
    hours: 70,
    category: "core",
    aka: "Loan Products",
  },
  {
    code: "FNSFMB513",
    name: "Prepare and Present Credit Proposals",
    description: "Structure and present compelling loan applications to lenders. Master the art of writing credit submissions, addressing credit concerns, and presenting borrower strengths. Includes lender negotiation strategies.",
    hours: 60,
    category: "core",
    aka: "Credit Proposals",
  },
  {
    code: "FNSFMB514",
    name: "Identify and Select Mortgage and Finance Products",
    description: "Deep dive into the mortgage product landscape including fixed vs variable rates, offset accounts, redraw facilities, package discounts, and non-bank alternatives. Learn to match products to client objectives.",
    hours: 50,
    category: "core",
    aka: "Product Selection",
  },
  {
    code: "FNSFMB515",
    name: "Provide Post-Settlement Service",
    description: "Build ongoing client relationships beyond settlement. Covers annual reviews, refinancing opportunities, portfolio management, and generating referrals. Critical for building a sustainable broking business.",
    hours: 40,
    category: "core",
    aka: "Client Retention",
  },
  {
    code: "FNSCRD502",
    name: "Maintain Credit Files",
    description: "Establish and maintain compliant credit files, record-keeping requirements, and documentation standards. Covers privacy obligations, data retention, and audit requirements for mortgage brokers.",
    hours: 30,
    category: "core",
    aka: "File Management",
  },
  {
    code: "FNSRSK511",
    name: "Manage Risk for Financial Services",
    description: "Identify, assess, and manage risks in mortgage broking operations. Covers professional indemnity, compliance risk, reputation risk, and implementing risk mitigation strategies.",
    hours: 40,
    category: "core",
    aka: "Risk Management",
  },
  {
    code: "FNSINC512",
    name: "Apply Ethical Frameworks to Financial Services",
    description: "Understand and apply ethical standards in mortgage broking. Covers conflicts of interest, commission disclosure, best interests duty, and professional conduct requirements under NCCP Act.",
    hours: 35,
    category: "core",
    aka: "Ethics & Compliance",
  },
  {
    code: "BSBPEF501",
    name: "Manage Personal and Professional Development",
    description: "Develop career management skills, CPD planning, and professional networking strategies. Covers building your personal brand, time management, and transitioning from employed broker to business owner.",
    hours: 25,
    category: "core",
    aka: "Professional Development",
  },
];

export const electiveModules: CourseModule[] = [
  {
    code: "FNSFMB516",
    name: "Provide Commercial and Business Lending Products",
    description: "Expand into commercial lending including business loans, commercial property finance, equipment finance, and debtor finance. Covers ABN lending, cash flow analysis, and business financial statements.",
    hours: 50,
    category: "elective",
    aka: "Commercial Lending",
  },
  {
    code: "FNSFMB517",
    name: "Provide SMSF Lending Products",
    description: "Specialist module covering self-managed superannuation fund lending. Understand limited recourse borrowing arrangements (LRBAs), bare trusts, and compliance requirements unique to SMSF lending.",
    hours: 40,
    category: "elective",
    aka: "SMSF Lending",
  },
  {
    code: "FNSCRD503",
    name: "Provide Consumer Credit Finance",
    description: "Personal lending products including car loans, personal loans, and consumer finance. Covers unsecured lending, chattel mortgages, and novated leasing.",
    hours: 35,
    category: "elective",
    aka: "Consumer Finance",
  },
  {
    code: "BSBOPS502",
    name: "Manage Business Operational Plans",
    description: "Develop and implement business plans for your mortgage broking business. Covers business structure, marketing plans, and operational efficiency.",
    hours: 30,
    category: "elective",
    aka: "Business Planning",
  },
];

export const allModules = [...coreModules, ...electiveModules];

export function getModuleByCode(code: string): CourseModule | undefined {
  return allModules.find((m) => m.code === code);
}

export function getTotalHours(): number {
  return coreModules.reduce((sum, m) => sum + m.hours, 0);
}
