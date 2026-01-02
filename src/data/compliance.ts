export interface ASQARequirement {
  id: string;
  title: string;
  description: string;
  details: string[];
  studentRights: string[];
  redFlags: string[];
}

export interface RTOObligation {
  category: string;
  obligations: {
    title: string;
    description: string;
    reference: string;
  }[];
}

export interface ComplianceChecklist {
  category: string;
  items: {
    question: string;
    why: string;
    greenFlag: string;
    redFlag: string;
  }[];
}

export const asqaOverview = {
  name: "Australian Skills Quality Authority",
  abbreviation: "ASQA",
  role: "National regulator for Australia's vocational education and training (VET) sector",
  website: "https://www.asqa.gov.au",
  registerUrl: "https://training.gov.au",
  description: "ASQA regulates courses and training providers to ensure nationally approved quality standards are met. All RTOs delivering FNS50322 must be registered with ASQA and comply with the Standards for Registered Training Organisations (RTOs) 2015.",
  keyFunctions: [
    "Registering and re-registering training providers (RTOs)",
    "Accrediting VET courses",
    "Conducting compliance audits and assessments",
    "Taking regulatory action against non-compliant providers",
    "Maintaining the national register of RTOs (training.gov.au)",
  ],
};

export const standardsForRTOs: ASQARequirement[] = [
  {
    id: "standard-1",
    title: "Standard 1: Training and Assessment",
    description: "RTOs must deliver training and assessment that develops and assesses the required skills and knowledge.",
    details: [
      "Training must be delivered by qualified trainers with vocational competency",
      "Trainers must hold TAE40122 or equivalent training qualification",
      "Assessment must be valid, reliable, flexible, and fair",
      "Assessment tools must be validated regularly",
      "Training and assessment strategies must be documented",
    ],
    studentRights: [
      "Receive training from qualified industry professionals",
      "Access to proper learning resources and materials",
      "Fair and valid assessment of your competencies",
      "Feedback on assessments within reasonable timeframes",
    ],
    redFlags: [
      "Trainers without current industry experience",
      "No access to trainers for questions",
      "Assessments that don't relate to unit requirements",
      "Pressure to complete unrealistically fast",
    ],
  },
  {
    id: "standard-2",
    title: "Standard 2: Operations",
    description: "RTOs must operate ethically and be managed effectively.",
    details: [
      "Clear governance and management structures",
      "Adequate financial viability and resources",
      "Transparent marketing and recruitment practices",
      "Proper record keeping and data management",
      "Third-party arrangements must be managed appropriately",
    ],
    studentRights: [
      "Accurate information about courses before enrolment",
      "Written agreement outlining terms and conditions",
      "Access to complaints and appeals processes",
      "Protection of personal information",
    ],
    redFlags: [
      "Pressure sales tactics or unrealistic promises",
      "No written enrolment agreement",
      "Hidden fees or unclear pricing",
      "Poor communication or unresponsive staff",
    ],
  },
  {
    id: "standard-3",
    title: "Standard 3: Issuance of Qualifications",
    description: "RTOs must issue qualifications and statements of attainment that accurately reflect student outcomes.",
    details: [
      "Qualifications issued only when all requirements are met",
      "Statements of attainment for partial completions",
      "Secure issuance and verification processes",
      "Records maintained for 30 years minimum",
    ],
    studentRights: [
      "Receive your qualification within 30 days of completion",
      "Access to certified copies of transcripts",
      "Verification of your qualification by employers",
      "Statement of attainment for completed units if you withdraw",
    ],
    redFlags: [
      "Promises of quick qualifications without proper training",
      "Offering to issue qualifications for payment without assessment",
      "No record of your enrolment or progress",
    ],
  },
  {
    id: "standard-4",
    title: "Standard 4: Credit and RPL",
    description: "RTOs must implement policies for credit transfer and recognition of prior learning (RPL).",
    details: [
      "Must accept nationally recognised qualifications for credit",
      "RPL must be offered as an assessment pathway",
      "Fair and rigorous RPL assessment processes",
      "Clear information about RPL options and costs",
    ],
    studentRights: [
      "Be informed of credit transfer and RPL options",
      "Have prior qualifications recognised",
      "Fair assessment of existing skills and experience",
      "RPL should reduce course duration and cost",
    ],
    redFlags: [
      "No mention of RPL options",
      "Charging full price regardless of prior learning",
      "Refusing to accept valid prior qualifications",
    ],
  },
  {
    id: "standard-5",
    title: "Standard 5: Student Information",
    description: "RTOs must provide accurate and accessible information to students.",
    details: [
      "Current and accurate information on training.gov.au",
      "Clear information about training products and services",
      "Transparent fee and refund policies",
      "Information about student support services",
    ],
    studentRights: [
      "Access to clear, accurate information before enrolling",
      "Know the total cost including any additional fees",
      "Understand the refund policy",
      "Know what support services are available",
    ],
    redFlags: [
      "Vague or missing pricing information",
      "No clear refund policy",
      "Course information doesn't match official training package",
    ],
  },
  {
    id: "standard-6",
    title: "Standard 6: Complaints and Appeals",
    description: "RTOs must have effective complaints and appeals processes.",
    details: [
      "Documented complaints and appeals policy",
      "Free access to complaints process",
      "Independent review options",
      "Timely resolution of issues",
    ],
    studentRights: [
      "Make complaints without fear of reprisal",
      "Have complaints handled fairly and promptly",
      "Appeal assessment decisions",
      "Escalate to ASQA if RTO doesn't resolve issues",
    ],
    redFlags: [
      "No visible complaints process",
      "Dismissive attitude towards student concerns",
      "Threats or intimidation when raising issues",
    ],
  },
  {
    id: "standard-7",
    title: "Standard 7: Governance and Administration",
    description: "RTOs must have effective governance and administrative arrangements.",
    details: [
      "Legal entity with appropriate structure",
      "Financial viability to deliver training",
      "Adequate insurance coverage",
      "Proper administrative systems",
    ],
    studentRights: [
      "Training delivered by a legitimate, registered organisation",
      "Protection through proper insurance",
      "Confidence in business continuity",
    ],
    redFlags: [
      "Very new RTO with no track record",
      "Sudden changes to business name or ownership",
      "Financial difficulties affecting delivery",
    ],
  },
  {
    id: "standard-8",
    title: "Standard 8: Legal Compliance",
    description: "RTOs must comply with all applicable legislation and regulatory requirements.",
    details: [
      "Compliance with state and federal laws",
      "WHS obligations met",
      "Consumer protection requirements",
      "VET Student Loans requirements (if applicable)",
    ],
    studentRights: [
      "Safe learning environment",
      "Consumer protection rights",
      "Proper handling of VET Student Loans",
    ],
    redFlags: [
      "History of regulatory action by ASQA",
      "Failure to meet VET Student Loans requirements",
      "WHS incidents or concerns",
    ],
  },
];

export const fns50322SpecificRequirements = {
  trainingPackage: "FNS - Financial Services Training Package",
  qualification: "FNS50322 - Diploma of Finance and Mortgage Broking Management",
  supersedes: "FNS50320",
  units: {
    core: 10,
    elective: 2,
    total: 12,
  },
  volumeOfLearning: {
    minimum: "1200 hours",
    typical: "12-18 months part-time",
    note: "Volume of learning includes all teaching, learning activities, and assessment. Shorter durations may indicate inadequate training.",
  },
  trainerRequirements: [
    "Hold FNS50322 or equivalent qualification (or higher)",
    "Current vocational competency in mortgage broking/finance",
    "Minimum 3 years industry experience (recommended)",
    "Hold TAE40122 Certificate IV in Training and Assessment (or equivalent)",
    "Ongoing professional development in both training and industry",
  ],
  industryConsultation: [
    "RTOs must consult with industry stakeholders",
    "Training must reflect current industry practices",
    "Assessment must align with real workplace requirements",
    "Regular review and updating of training materials",
  ],
};

export const complianceChecklist: ComplianceChecklist[] = [
  {
    category: "Before You Enrol",
    items: [
      {
        question: "Is the RTO listed on training.gov.au?",
        why: "Only registered RTOs can issue nationally recognised qualifications",
        greenFlag: "Active registration with scope to deliver FNS50322",
        redFlag: "Not listed, or FNS50322 not on their scope",
      },
      {
        question: "Is the RTO's scope current for FNS50322 (not FNS50320)?",
        why: "FNS50322 is the current qualification - FNS50320 is superseded",
        greenFlag: "Scope shows FNS50322 with current status",
        redFlag: "Only showing FNS50320 or expired scope",
      },
      {
        question: "Have you received a written enrolment agreement?",
        why: "RTOs must provide clear terms before enrolment",
        greenFlag: "Detailed agreement with fees, refund policy, and course details",
        redFlag: "Verbal agreements only, or pressure to sign immediately",
      },
      {
        question: "Is the total cost clearly stated?",
        why: "Hidden fees are a common complaint",
        greenFlag: "All-inclusive pricing with itemised breakdown",
        redFlag: "Vague pricing, 'starting from' amounts, or mention of additional fees",
      },
      {
        question: "Is there a clear refund policy?",
        why: "You're entitled to refunds under consumer law",
        greenFlag: "Written refund policy with specific timeframes",
        redFlag: "No refund policy, or 'no refunds under any circumstances'",
      },
    ],
  },
  {
    category: "During Training",
    items: [
      {
        question: "Do trainers have industry experience?",
        why: "Trainers must have current vocational competency",
        greenFlag: "Trainers with recent mortgage broking/finance experience",
        redFlag: "Trainers who've never worked in the industry",
      },
      {
        question: "Can you contact trainers when needed?",
        why: "Student support is an RTO obligation",
        greenFlag: "Regular access via phone, email, or scheduled sessions",
        redFlag: "No trainer contact, or weeks without responses",
      },
      {
        question: "Is the training content up to date?",
        why: "Training must reflect current industry practices",
        greenFlag: "References to current legislation, lender policies, NCCP Act",
        redFlag: "Outdated content, old legislation references",
      },
      {
        question: "Are assessments relevant to the units?",
        why: "Assessment must validly test competency",
        greenFlag: "Practical scenarios, case studies, real-world tasks",
        redFlag: "Generic questions, content that doesn't match units",
      },
      {
        question: "Is the pace reasonable?",
        why: "Volume of learning requirements exist for a reason",
        greenFlag: "Adequate time to learn and practice skills",
        redFlag: "Pressure to complete in weeks, 'fast-track' promises",
      },
    ],
  },
  {
    category: "After Completion",
    items: [
      {
        question: "Did you receive your qualification within 30 days?",
        why: "RTOs must issue within 30 calendar days of completion",
        greenFlag: "Timely issuance with proper documentation",
        redFlag: "Delays beyond 30 days, excuses, or missing documents",
      },
      {
        question: "Is your qualification verifiable?",
        why: "Employers and industry bodies should be able to verify",
        greenFlag: "Listed on USI transcript, verification letter available",
        redFlag: "No record of your qualification existing",
      },
      {
        question: "Did you receive a Statement of Attainment for each unit?",
        why: "Records of individual unit completions are your right",
        greenFlag: "Complete records showing all 12 units achieved",
        redFlag: "Only the diploma certificate, no unit records",
      },
    ],
  },
];

export const regulatoryActions = {
  title: "ASQA Regulatory Actions",
  description: "ASQA can take various actions against non-compliant RTOs. Understanding these helps you assess provider risk.",
  actions: [
    {
      type: "Conditions on Registration",
      severity: "Medium",
      meaning: "RTO must meet specific requirements to continue operating",
      studentImpact: "Training may continue but with oversight",
    },
    {
      type: "Suspension of Registration",
      severity: "High",
      meaning: "RTO temporarily cannot enrol new students or issue qualifications",
      studentImpact: "Current students may need to transfer to another provider",
    },
    {
      type: "Cancellation of Registration",
      severity: "Critical",
      meaning: "RTO can no longer operate as a training provider",
      studentImpact: "Students must transfer; may need to redo some training",
    },
    {
      type: "Infringement Notice",
      severity: "Low-Medium",
      meaning: "Penalty for specific non-compliance issues",
      studentImpact: "Usually no direct impact if RTO addresses issues",
    },
  ],
  checkHistory: "Search for RTOs on training.gov.au and check their 'Regulatory decisions' section",
};

export const studentProtections = {
  vet: {
    title: "VET Student Loans Protections",
    description: "If your course is approved for VET Student Loans, additional protections apply:",
    protections: [
      "Two business days to reconsider enrolment (cooling-off)",
      "Detailed loan information before signing",
      "Tuition protection if RTO closes",
      "Maximum loan caps to prevent overcharging",
      "Census dates before debt is incurred",
    ],
    warning: "Not all FNS50322 providers offer VET Student Loans. Those that do must meet stricter requirements.",
  },
  consumer: {
    title: "Australian Consumer Law Protections",
    description: "As a consumer purchasing educational services, you're protected by:",
    protections: [
      "Services must be provided with due care and skill",
      "Services must be fit for purpose",
      "Protection against misleading conduct",
      "Right to refund for services not provided",
      "Protection against unfair contract terms",
    ],
    redress: "Contact your state/territory consumer affairs office or the ACCC for consumer issues.",
  },
  complaints: {
    title: "Complaint Pathways",
    steps: [
      {
        level: 1,
        title: "Raise with RTO",
        description: "First, use the RTO's internal complaints process",
        timeframe: "Allow 30 days for resolution",
      },
      {
        level: 2,
        title: "Escalate to ASQA",
        description: "If RTO doesn't resolve, lodge complaint with ASQA",
        timeframe: "ASQA assesses within 30 days",
        link: "https://www.asqa.gov.au/complaints",
      },
      {
        level: 3,
        title: "Consumer Affairs",
        description: "For refund or contract issues, contact state consumer affairs",
        timeframe: "Varies by state",
      },
      {
        level: 4,
        title: "Ombudsman",
        description: "Some states have training ombudsman services",
        timeframe: "Varies",
      },
    ],
  },
};

export const dueDiligenceSteps = [
  {
    step: 1,
    title: "Verify RTO Registration",
    action: "Search training.gov.au for the RTO",
    checkFor: [
      "Active registration status",
      "FNS50322 on their scope of registration",
      "No adverse regulatory decisions",
      "Registration renewal date (avoid if expiring soon)",
    ],
    link: "https://training.gov.au",
  },
  {
    step: 2,
    title: "Check ASQA Regulatory History",
    action: "Review any conditions or actions on their registration",
    checkFor: [
      "Clean compliance history",
      "No current conditions or sanctions",
      "No history of student complaints",
      "Stable registration with renewals granted",
    ],
    link: "https://www.asqa.gov.au",
  },
  {
    step: 3,
    title: "Verify VET Student Loans Approval (if applicable)",
    action: "Check if RTO is approved for VET Student Loans",
    checkFor: [
      "Listed on Study Assist website",
      "FNS50322 specifically approved for VSL",
      "Compliance with VSL requirements",
    ],
    link: "https://www.studyassist.gov.au",
  },
  {
    step: 4,
    title: "Research Reviews and Reputation",
    action: "Search for student reviews and industry reputation",
    checkFor: [
      "Consistent positive reviews",
      "Reasonable completion rates",
      "Industry body recommendations",
      "Employer acceptance of their graduates",
    ],
  },
  {
    step: 5,
    title: "Contact the RTO",
    action: "Speak with enrolment and training staff",
    checkFor: [
      "Knowledgeable staff who answer questions",
      "No high-pressure sales tactics",
      "Clear explanation of course structure",
      "Transparent about trainer qualifications",
    ],
  },
];

export function getComplianceRiskLevel(
  rtoData: {
    yearsOperating?: number;
    hasConditions?: boolean;
    completionRate?: number;
    vetApproved?: boolean;
  }
): "low" | "medium" | "high" {
  let riskScore = 0;

  if (rtoData.yearsOperating && rtoData.yearsOperating < 2) riskScore += 2;
  if (rtoData.hasConditions) riskScore += 3;
  if (rtoData.completionRate && rtoData.completionRate < 70) riskScore += 2;
  if (!rtoData.vetApproved) riskScore += 1;

  if (riskScore >= 4) return "high";
  if (riskScore >= 2) return "medium";
  return "low";
}
