export interface LicensingStep {
  step: number;
  title: string;
  description: string;
  timeframe: string;
  cost: string;
  details: string[];
  tips: string[];
  links?: { label: string; url: string }[];
}

export interface LicenseType {
  id: string;
  name: string;
  description: string;
  suitability: string[];
  requirements: string[];
  pros: string[];
  cons: string[];
  typicalPath: string;
}

export interface IndustryBody {
  id: string;
  name: string;
  abbreviation: string;
  website: string;
  membershipCost: string;
  requirements: string[];
  benefits: string[];
  lenderAccess: string;
  recommendation: string;
}

export interface Aggregator {
  name: string;
  type: "Major" | "Mid-tier" | "Boutique";
  lenderPanel: string;
  commissionSplit: string;
  fees: string;
  support: string[];
  bestFor: string;
}

export interface PIInsurance {
  provider: string;
  coverageMin: string;
  annualCost: string;
  features: string[];
}

export const licensingOverview = {
  title: "Mortgage Broker Licensing in Australia",
  description: "To work as a mortgage broker in Australia, you need more than just the FNS50322 qualification. This guide covers the complete licensing pathway from qualification to writing your first loan.",
  keyPoints: [
    "FNS50322 is the educational requirement - not the licence itself",
    "You operate under an Australian Credit Licence (ACL) - either your own or as a Credit Representative",
    "Most new brokers start as Credit Representatives under an aggregator's ACL",
    "Industry body membership (MFAA or FBAA) is effectively mandatory",
    "Professional Indemnity insurance is required",
    "Ongoing CPD requirements apply",
  ],
};

export const licensingPathway: LicensingStep[] = [
  {
    step: 1,
    title: "Complete FNS50322",
    description: "Obtain the Diploma of Finance and Mortgage Broking Management from an ASQA-registered RTO.",
    timeframe: "4-12 months",
    cost: "$3,500 - $6,000",
    details: [
      "12 units of competency (10 core + 2 electives)",
      "Covers credit law, product knowledge, needs analysis",
      "Online, blended, or face-to-face delivery options",
      "VET Student Loans available at approved providers",
      "RPL available for those with relevant experience",
    ],
    tips: [
      "Choose a provider with strong industry connections",
      "Look for aggregator partnerships for easier transition",
      "Don't rush - quality training matters more than speed",
    ],
    links: [
      { label: "Compare FNS50322 Providers", url: "/compare" },
      { label: "Course Finder Quiz", url: "/quiz" },
    ],
  },
  {
    step: 2,
    title: "Join MFAA or FBAA",
    description: "Become a member of an approved industry body. This is required by most aggregators and lenders.",
    timeframe: "2-4 weeks",
    cost: "$550 - $800/year",
    details: [
      "MFAA (Mortgage & Finance Association of Australia) - largest body",
      "FBAA (Finance Brokers Association of Australia) - growing alternative",
      "Membership requires FNS50322 or equivalent",
      "Annual renewal and CPD requirements",
      "Some brokers hold dual membership",
    ],
    tips: [
      "Check which body your preferred aggregator requires",
      "MFAA is more widely required but FBAA is growing",
      "Membership provides access to industry events and resources",
    ],
    links: [
      { label: "MFAA Website", url: "https://www.mfaa.com.au" },
      { label: "FBAA Website", url: "https://www.fbaa.com.au" },
    ],
  },
  {
    step: 3,
    title: "Select an Aggregator",
    description: "Join an aggregator to access lender panels, software, and operate under their Australian Credit Licence.",
    timeframe: "2-6 weeks",
    cost: "$0 - $500/month + commission split",
    details: [
      "Aggregators hold the ACL you operate under",
      "Provide access to 30-50+ lender panels",
      "Supply broker software (ApplyOnline, MyCRM, etc.)",
      "Offer compliance support and training",
      "Take a commission split (typically 10-20%)",
    ],
    tips: [
      "Compare commission splits carefully - small differences add up",
      "Consider support quality, not just price",
      "Ask about mentoring programs for new brokers",
      "Check their lender panel covers your target market",
    ],
  },
  {
    step: 4,
    title: "Register as Credit Representative",
    description: "Formally register as a Credit Representative under your aggregator's ACL with ASIC.",
    timeframe: "1-2 weeks",
    cost: "Usually included in aggregator fees",
    details: [
      "Your aggregator handles the ASIC registration",
      "You'll be listed on the ASIC Credit Representative register",
      "Authorises you to provide credit assistance",
      "Tied to your aggregator - changes if you move",
      "Annual confirmation required",
    ],
    tips: [
      "Verify your registration on ASIC's website once complete",
      "Understand the authorisations you're granted",
      "Keep your registration details updated",
    ],
    links: [
      { label: "ASIC Credit Representative Register", url: "https://asic.gov.au/online-services/search-asics-registers/" },
    ],
  },
  {
    step: 5,
    title: "Obtain PI Insurance",
    description: "Secure Professional Indemnity insurance - mandatory for all mortgage brokers.",
    timeframe: "1-2 weeks",
    cost: "$600 - $1,500/year",
    details: [
      "Minimum $2 million coverage typically required",
      "Covers claims from professional negligence",
      "Some aggregators provide group policies",
      "Individual policies may offer better coverage",
      "Annual renewal required",
    ],
    tips: [
      "Check if your aggregator offers group PI",
      "Compare individual policies - group may not be cheapest",
      "Ensure coverage meets MFAA/FBAA requirements",
      "Keep certificates current - lenders check",
    ],
  },
  {
    step: 6,
    title: "Complete Police Check",
    description: "Obtain a National Police Check (criminal history check) - required by aggregators and lenders.",
    timeframe: "1-5 days",
    cost: "$40 - $60",
    details: [
      "National Police Certificate required",
      "Must be less than 12 months old at registration",
      "Some states require additional checks",
      "Bankruptcy check also typically required",
      "Ongoing disclosure obligations apply",
    ],
    tips: [
      "Apply online for fastest processing",
      "ACIC or state police services are valid",
      "Disclose any issues upfront - honesty is key",
    ],
    links: [
      { label: "Australian Criminal Intelligence Commission", url: "https://www.acic.gov.au/services/national-police-checking-service" },
    ],
  },
  {
    step: 7,
    title: "Complete Aggregator Onboarding",
    description: "Finish your aggregator's induction program, system training, and compliance requirements.",
    timeframe: "2-4 weeks",
    cost: "Usually included",
    details: [
      "Compliance training and assessment",
      "Software training (loan lodgement systems)",
      "Lender accreditation process",
      "Business setup guidance",
      "Mentoring program (if available)",
    ],
    tips: [
      "Take the training seriously - it's practical knowledge",
      "Get accredited with as many lenders as possible upfront",
      "Utilise mentoring if offered",
      "Set up your business systems properly from day one",
    ],
  },
  {
    step: 8,
    title: "Start Writing Loans",
    description: "You're now authorised to provide credit assistance and earn commissions.",
    timeframe: "Ongoing",
    cost: "N/A - you're now earning!",
    details: [
      "Prospect and meet with clients",
      "Conduct needs analysis and fact finds",
      "Research and recommend suitable products",
      "Submit applications and manage to settlement",
      "Earn upfront and trail commissions",
    ],
    tips: [
      "First 6 months focus on learning, not just earning",
      "Build referral relationships early",
      "Document everything for compliance",
      "Join a study group or mastermind with other new brokers",
    ],
  },
];

export const licenseTypes: LicenseType[] = [
  {
    id: "credit-rep",
    name: "Credit Representative",
    description: "Operate under an aggregator's or employer's Australian Credit Licence (ACL). The most common path for new brokers.",
    suitability: [
      "New brokers (recommended starting point)",
      "Brokers wanting minimal compliance burden",
      "Those who value aggregator support",
      "Brokers focused on residential lending",
    ],
    requirements: [
      "FNS50322 or equivalent qualification",
      "MFAA or FBAA membership",
      "Agreement with ACL holder (aggregator/employer)",
      "PI insurance (often via aggregator)",
      "Police check",
    ],
    pros: [
      "Lower compliance burden - ACL holder manages most",
      "Access to aggregator support and systems",
      "Faster to get started",
      "Lower setup costs",
      "Mentoring typically available",
    ],
    cons: [
      "Commission split with aggregator",
      "Less independence",
      "Tied to aggregator's lender panel",
      "Limited branding flexibility",
    ],
    typicalPath: "95%+ of new brokers start here",
  },
  {
    id: "own-acl",
    name: "Own Australian Credit Licence",
    description: "Hold your own ACL directly with ASIC. Full independence but significant compliance obligations.",
    suitability: [
      "Experienced brokers (5+ years typically)",
      "Those building a brokerage/team",
      "Commercial/specialist lenders",
      "Brokers wanting full independence",
    ],
    requirements: [
      "FNS50322 plus additional qualifications",
      "Demonstrated experience (typically 2+ years)",
      "Responsible Manager requirements",
      "Comprehensive compliance systems",
      "Higher PI insurance coverage",
      "Financial requirements/capital",
      "ASIC application and ongoing fees",
    ],
    pros: [
      "Full independence",
      "Keep 100% of commissions",
      "Choose your own lender relationships",
      "Build transferable business value",
      "Can authorise Credit Representatives",
    ],
    cons: [
      "Significant compliance burden",
      "Higher costs (ASIC fees, compliance, PI)",
      "Personal liability exposure",
      "No aggregator support",
      "Complex application process",
    ],
    typicalPath: "Usually after 5+ years as Credit Representative",
  },
  {
    id: "hybrid",
    name: "Hybrid Model",
    description: "Hold your own ACL but use an aggregator for lender access and some support services.",
    suitability: [
      "Experienced brokers wanting independence",
      "Those building a team",
      "Brokers with niche specialisation",
    ],
    requirements: [
      "Own ACL (see requirements above)",
      "Aggregator membership agreement",
      "Dual compliance obligations",
    ],
    pros: [
      "Independence with lender access",
      "Can authorise own Credit Reps",
      "Aggregator support available",
      "Flexibility in business model",
    ],
    cons: [
      "Dual compliance burden",
      "Still paying aggregator fees",
      "Complex structure",
    ],
    typicalPath: "Brokers transitioning from Credit Rep to full independence",
  },
];

export const industryBodies: IndustryBody[] = [
  {
    id: "mfaa",
    name: "Mortgage & Finance Association of Australia",
    abbreviation: "MFAA",
    website: "https://www.mfaa.com.au",
    membershipCost: "$750 - $850/year (varies by membership type)",
    requirements: [
      "FNS50322 or equivalent qualification",
      "Current PI insurance",
      "Authorised under an ACL",
      "Police check",
      "Agree to Code of Practice",
      "Ongoing CPD requirements (30 points/year)",
    ],
    benefits: [
      "Largest industry body - 14,000+ members",
      "Widest lender recognition",
      "Comprehensive CPD program",
      "Industry advocacy",
      "Professional development events",
      "Member resources and templates",
      "Referral and networking opportunities",
      "Excellence Awards recognition",
    ],
    lenderAccess: "Required by most major lenders and aggregators",
    recommendation: "Best choice if your aggregator requires it or you want the widest lender access",
  },
  {
    id: "fbaa",
    name: "Finance Brokers Association of Australia",
    abbreviation: "FBAA",
    website: "https://www.fbaa.com.au",
    membershipCost: "$550 - $650/year",
    requirements: [
      "FNS50322 or equivalent qualification",
      "Current PI insurance",
      "Authorised under an ACL",
      "Police check",
      "Agree to Code of Conduct",
      "Ongoing CPD requirements",
    ],
    benefits: [
      "Growing membership base - 8,000+ members",
      "Lower membership fees",
      "Strong broker advocacy",
      "Personalised member support",
      "CPD and training programs",
      "Industry events and networking",
      "Broker support hotline",
      "Growing lender recognition",
    ],
    lenderAccess: "Accepted by most lenders, growing recognition",
    recommendation: "Good choice for cost-conscious brokers or if your aggregator accepts it",
  },
];

export const majorAggregators: Aggregator[] = [
  {
    name: "Connective",
    type: "Major",
    lenderPanel: "60+ lenders",
    commissionSplit: "85-90% to broker",
    fees: "$0 - $400/month depending on tier",
    support: [
      "Comprehensive training program",
      "Mentoring for new brokers",
      "Mercury software platform",
      "Compliance support",
      "Marketing resources",
    ],
    bestFor: "Brokers wanting strong technology and support",
  },
  {
    name: "AFG (Australian Finance Group)",
    type: "Major",
    lenderPanel: "70+ lenders",
    commissionSplit: "85-92% to broker",
    fees: "Volume-based fee structure",
    support: [
      "AFG Home Loans (white label)",
      "Flex platform",
      "Training and development",
      "BDM support network",
      "Lead generation tools",
    ],
    bestFor: "Volume-focused brokers, those wanting white label options",
  },
  {
    name: "Finsure",
    type: "Major",
    lenderPanel: "55+ lenders",
    commissionSplit: "85-90% to broker",
    fees: "$200-500/month",
    support: [
      "Brisbane-based support",
      "Infynity CRM platform",
      "Strong QLD presence",
      "Mentoring programs",
      "Competitive commercial panel",
    ],
    bestFor: "Queensland-based brokers, those wanting personalised support",
  },
  {
    name: "Loan Market",
    type: "Major",
    lenderPanel: "50+ lenders",
    commissionSplit: "Franchise model varies",
    fees: "Franchise fees apply",
    support: [
      "Strong brand recognition",
      "Marketing support",
      "Franchise model with territories",
      "Training academy",
      "Lead generation",
    ],
    bestFor: "Brokers wanting brand recognition and marketing support",
  },
  {
    name: "PLAN Australia",
    type: "Major",
    lenderPanel: "45+ lenders",
    commissionSplit: "85-88% to broker",
    fees: "$300-500/month",
    support: [
      "Podium platform",
      "Strong community focus",
      "Annual conference",
      "Peer groups",
      "Training programs",
    ],
    bestFor: "Brokers valuing community and peer support",
  },
  {
    name: "Outsource Financial",
    type: "Mid-tier",
    lenderPanel: "40+ lenders",
    commissionSplit: "88-92% to broker",
    fees: "$150-300/month",
    support: [
      "Lower fees",
      "Flexible arrangements",
      "Basic support",
      "Self-sufficient brokers",
    ],
    bestFor: "Experienced brokers wanting lower fees",
  },
  {
    name: "National Mortgage Brokers (nMB)",
    type: "Mid-tier",
    lenderPanel: "45+ lenders",
    commissionSplit: "87-90% to broker",
    fees: "$200-400/month",
    support: [
      "Broker-owned aggregator",
      "Member-focused",
      "Good lender panel",
      "Mentoring available",
    ],
    bestFor: "Brokers wanting member-owned model",
  },
];

export const piInsuranceInfo = {
  title: "Professional Indemnity Insurance",
  description: "PI insurance protects you against claims arising from your professional services. It's mandatory for all mortgage brokers.",
  minimumCoverage: "$2,000,000",
  typicalCost: "$600 - $1,500/year for new brokers",
  factors: [
    "Years of experience",
    "Loan volume",
    "Types of lending (resi vs commercial)",
    "Claims history",
    "Aggregator group policy vs individual",
  ],
  coverage: [
    "Professional negligence claims",
    "Errors and omissions",
    "Breach of duty",
    "Misleading advice claims",
    "Defence costs",
  ],
  tips: [
    "Compare aggregator group policies with individual policies",
    "Ensure coverage meets MFAA/FBAA requirements",
    "Check excess amounts - lower isn't always better",
    "Review coverage limits annually as volume grows",
    "Keep certificates current - lenders verify",
  ],
};

export const cpdRequirements = {
  title: "Continuing Professional Development (CPD)",
  description: "Ongoing learning requirements to maintain your industry membership and stay current with regulatory changes.",
  mfaa: {
    pointsRequired: 30,
    period: "Annual (calendar year)",
    categories: [
      "Ethics and compliance",
      "Technical knowledge",
      "Professional skills",
      "Business skills",
    ],
    notes: "At least 5 points must be in ethics/compliance",
  },
  fbaa: {
    pointsRequired: 25,
    period: "Annual",
    categories: [
      "Regulatory/compliance",
      "Technical/product",
      "Professional development",
    ],
    notes: "Minimum requirements per category apply",
  },
  sources: [
    "Industry body webinars and events",
    "Lender training sessions",
    "Aggregator training programs",
    "Third-party CPD providers",
    "Industry conferences",
    "Self-study (limited points)",
  ],
  tips: [
    "Plan CPD throughout the year - don't leave to December",
    "Attend aggregator and lender training - often free",
    "Industry conferences count for multiple points",
    "Keep records of all CPD activities",
    "Focus on areas that improve your practice, not just points",
  ],
};

export const stateRequirements = {
  national: {
    title: "National Requirements (All States)",
    requirements: [
      "FNS50322 Diploma of Finance and Mortgage Broking Management",
      "Authorisation under an Australian Credit Licence",
      "MFAA or FBAA membership",
      "Professional Indemnity insurance ($2M minimum)",
      "National Police Check",
      "Ongoing CPD requirements",
    ],
  },
  stateSpecific: [
    {
      state: "NSW",
      body: "NSW Fair Trading",
      additionalRequirements: [
        "No additional state licensing for credit activities",
        "Smart and Skilled funding may apply for training",
      ],
      notes: "Most straightforward - national requirements only",
    },
    {
      state: "VIC",
      body: "Consumer Affairs Victoria",
      additionalRequirements: [
        "No additional state licensing for credit activities",
        "Skills First funding may reduce training costs",
      ],
      notes: "National requirements apply",
    },
    {
      state: "QLD",
      body: "Office of Fair Trading Queensland",
      additionalRequirements: [
        "No additional state licensing for credit activities",
        "Blue Card may be required for some client-facing roles",
      ],
      notes: "Straightforward national requirements",
    },
    {
      state: "WA",
      body: "Department of Mines, Industry Regulation and Safety",
      additionalRequirements: [
        "Finance Brokers Control Act (historical - largely superseded by national law)",
        "National requirements now primary framework",
      ],
      notes: "National framework has superseded most state requirements",
    },
    {
      state: "SA",
      body: "Consumer and Business Services SA",
      additionalRequirements: [
        "No additional state licensing",
      ],
      notes: "National requirements only",
    },
    {
      state: "TAS",
      body: "Consumer, Building and Occupational Services",
      additionalRequirements: [
        "No additional state licensing",
      ],
      notes: "National requirements only",
    },
    {
      state: "NT",
      body: "NT Consumer Affairs",
      additionalRequirements: [
        "Working with Children Check (Ochre Card) may apply for some roles",
      ],
      notes: "Remote location - online training common",
    },
    {
      state: "ACT",
      body: "Access Canberra",
      additionalRequirements: [
        "Working with Vulnerable People Check may apply for some roles",
      ],
      notes: "National requirements apply",
    },
  ],
};

export const commonMistakes = [
  {
    mistake: "Starting to write loans before fully licensed",
    consequence: "Illegal credit activity - serious penalties",
    prevention: "Complete all steps before meeting clients about loans",
  },
  {
    mistake: "Letting PI insurance lapse",
    consequence: "Suspension of authorisation, personal liability",
    prevention: "Set calendar reminders, auto-renew if possible",
  },
  {
    mistake: "Not completing CPD requirements",
    consequence: "Loss of MFAA/FBAA membership, lender access issues",
    prevention: "Spread CPD throughout the year, track points",
  },
  {
    mistake: "Providing advice outside authorisation",
    consequence: "Breach of credit licence, potential ban",
    prevention: "Know your authorisation limits, refer when needed",
  },
  {
    mistake: "Inadequate documentation",
    consequence: "Compliance breaches, claim vulnerability",
    prevention: "Document every client interaction, use templates",
  },
  {
    mistake: "Ignoring disclosure requirements",
    consequence: "ASIC action, client complaints",
    prevention: "Follow aggregator disclosure procedures exactly",
  },
];

export const timelineEstimate = {
  minimum: "3-4 months",
  typical: "6-9 months",
  steps: [
    { step: "FNS50322 completion", min: "4 months", typical: "6-12 months" },
    { step: "Industry body membership", min: "2 weeks", typical: "2-4 weeks" },
    { step: "Aggregator selection/onboarding", min: "3 weeks", typical: "4-8 weeks" },
    { step: "Credit Representative registration", min: "1 week", typical: "1-2 weeks" },
    { step: "PI insurance", min: "1 week", typical: "1-2 weeks" },
    { step: "Police check", min: "2 days", typical: "1-2 weeks" },
    { step: "Lender accreditations", min: "2 weeks", typical: "2-4 weeks" },
  ],
  note: "Fast-track programs may complete in 4-6 months total. Standard pathway is 9-12 months.",
};

export const costEstimate = {
  category: "Initial Setup Costs",
  items: [
    { item: "FNS50322 Course", range: "$3,500 - $6,000" },
    { item: "MFAA/FBAA Membership (Year 1)", range: "$550 - $850" },
    { item: "PI Insurance (Year 1)", range: "$600 - $1,500" },
    { item: "Police Check", range: "$40 - $60" },
    { item: "Business Setup (ABN, etc.)", range: "$0 - $500" },
    { item: "Aggregator Fees (varies)", range: "$0 - $2,000" },
  ],
  total: "$5,000 - $11,000",
  note: "VET Student Loans can cover FNS50322 fees, significantly reducing upfront costs",
  ongoingAnnual: [
    { item: "MFAA/FBAA Membership", range: "$550 - $850" },
    { item: "PI Insurance", range: "$600 - $1,500" },
    { item: "Aggregator Fees", range: "$0 - $6,000" },
    { item: "CPD/Training", range: "$200 - $1,000" },
    { item: "Software/Subscriptions", range: "$500 - $2,000" },
  ],
  ongoingTotal: "$2,000 - $11,000/year (before commission splits)",
};
