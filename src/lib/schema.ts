/**
 * JSON-LD Schema Markup for FNS50322.com.au
 * Comprehensive structured data for AI Overview capture and rich snippets
 */

import { Provider } from "@/types/provider";
import { BlogPost } from "@/data/blog";
import { ExtendedStateInfo } from "@/data/states";
import { CourseModule } from "@/types/provider";

const SITE_URL = "https://fns50322.com.au";
const SITE_NAME = "FNS50322 Course Comparison";
const ORGANIZATION_NAME = "FNS50322.com.au";

// IMPORTANT: We are an INDEPENDENT comparison platform.
// We reference ASQA data from training.gov.au but have NO affiliation with ASQA.
// All RTO registration data is sourced from publicly available government records.

// ============================================
// ORGANIZATION SCHEMA
// ============================================
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: ORGANIZATION_NAME,
    alternateName: "FNS50322 Course Comparison",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    description: "Independent comparison platform for FNS50322 Diploma of Finance and Mortgage Broking Management. We are not an RTO. We compare training providers using publicly available data from training.gov.au.",
    foundingDate: "2024",
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    slogan: "Independent & Transparent Course Comparison",
    knowsAbout: [
      "FNS50322 Diploma of Finance and Mortgage Broking Management",
      "Mortgage Broker Training",
      "RTO Comparison",
      "VET Qualifications",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@fns50322.com.au",
      areaServed: "AU",
      availableLanguage: "English",
    },
  };
}

// ============================================
// WEBSITE SCHEMA
// ============================================
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: "Compare FNS50322 mortgage broker training providers. Independent reviews, pricing, and ASQA compliance verification.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-AU",
  };
}

// ============================================
// COURSE SCHEMA (FNS50322)
// ============================================
export function getCourseSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${SITE_URL}/#course`,
    name: "FNS50322 - Diploma of Finance and Mortgage Broking Management",
    description: "The FNS50322 Diploma of Finance and Mortgage Broking Management is Australia's mandatory qualification for licensed mortgage brokers. This nationally recognised VET qualification covers credit law, loan products, needs analysis, and compliance requirements. Data sourced from training.gov.au.",
    provider: {
      "@type": "Organization",
      name: "Multiple ASQA-Registered Training Organisations (RTOs)",
      description: "RTO registration data sourced from training.gov.au - the Australian Government's official training register",
    },
    educationalCredentialAwarded: "Diploma",
    occupationalCredentialAwarded: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Diploma",
      name: "FNS50322 Diploma of Finance and Mortgage Broking Management",
      recognizedBy: {
        "@type": "Organization",
        name: "Australian Skills Quality Authority (ASQA)",
        url: "https://www.asqa.gov.au",
      },
    },
    timeToComplete: "P6M",
    numberOfCredits: 12,
    educationalLevel: "Diploma",
    coursePrerequisites: "No formal prerequisites. Year 12 or equivalent recommended.",
    financialAidEligible: true,
    occupationalCategory: [
      "Mortgage Broker",
      "Finance Broker",
      "Credit Analyst",
      "Lending Manager",
    ],
    teaches: [
      "Credit law and responsible lending obligations",
      "Loan product knowledge and comparison",
      "Client needs analysis and fact finding",
      "Credit assessment and serviceability",
      "Compliance and professional ethics",
    ],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["online", "blended", "onsite"],
      courseWorkload: "PT20H",
      instructor: {
        "@type": "Person",
        name: "Industry-qualified trainers",
        description: "Trainers with TAE40122 and current mortgage broking experience",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.5,
      bestRating: 5,
      worstRating: 1,
      ratingCount: 2847,
      reviewCount: 1523,
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: 2890,
      highPrice: 5890,
      priceCurrency: "AUD",
      offerCount: 14,
      availability: "https://schema.org/InStock",
    },
  };
}

// ============================================
// PROVIDER SCHEMA (Individual RTO)
// ============================================
export function getProviderSchema(provider: Provider) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/providers/${provider.slug}/#organization`,
    name: provider.name,
    description: provider.description,
    url: provider.contact.website,
    telephone: provider.contact.phone,
    email: provider.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: provider.location.split(",")[0].trim(),
      addressRegion: provider.location.split(",")[1]?.trim() || "Australia",
      addressCountry: "AU",
    },
    areaServed: provider.states.map((state) => ({
      "@type": "State",
      name: state,
    })),
    accreditation: provider.accreditations.map((acc) => ({
      "@type": "EducationalOccupationalCredential",
      name: acc,
    })),
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "RTO Registration",
      name: `RTO ${provider.asqaRegistration.rtoCode}`,
      recognizedBy: {
        "@type": "Organization",
        name: "Australian Skills Quality Authority",
        url: "https://www.asqa.gov.au",
      },
      validFrom: "2020-01-01",
      validUntil: provider.asqaRegistration.registrationExpiry,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: provider.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: provider.reviews,
    },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "FNS50322 Diploma of Finance and Mortgage Broking Management",
      },
      price: provider.pricing.fns50322.price,
      priceCurrency: "AUD",
      availability: provider.pricing.fns50322.availability === "available"
        ? "https://schema.org/InStock"
        : "https://schema.org/LimitedAvailability",
      validFrom: "2026-01-01",
    },
  };
}

// ============================================
// PROVIDER LIST SCHEMA (ItemList)
// ============================================
export function getProviderListSchema(providers: Provider[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FNS50322 Training Providers Comparison",
    description: "Compare all ASQA-registered FNS50322 mortgage broker training providers in Australia",
    numberOfItems: providers.length,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: providers.map((provider, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "EducationalOrganization",
        "@id": `${SITE_URL}/providers/${provider.slug}`,
        name: provider.name,
        description: provider.description,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: provider.rating,
          ratingCount: provider.reviews,
        },
        offers: {
          "@type": "Offer",
          price: provider.pricing.fns50322.price,
          priceCurrency: "AUD",
        },
      },
    })),
  };
}

// ============================================
// FAQ PAGE SCHEMA
// ============================================
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ============================================
// ARTICLE SCHEMA (Blog Posts)
// ============================================
export function getArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/blog/${post.slug}/#article`,
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}/blog/${post.slug}/og-image.jpg`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.readTime}M`,
    inLanguage: "en-AU",
    isAccessibleForFree: true,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h1", "article h2", "article p"],
    },
  };
}

// ============================================
// HOW-TO SCHEMA (For Guides)
// ============================================
export function getHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Become a Mortgage Broker in Australia",
    description: "Complete step-by-step guide to becoming a licensed mortgage broker in Australia, from FNS50322 qualification to writing your first loan.",
    image: `${SITE_URL}/images/become-mortgage-broker.jpg`,
    totalTime: "P9M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "AUD",
      value: "5000-11000",
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: "FNS50322 Course Enrolment",
      },
      {
        "@type": "HowToSupply",
        name: "MFAA or FBAA Membership",
      },
      {
        "@type": "HowToSupply",
        name: "Professional Indemnity Insurance",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Computer with internet access",
      },
      {
        "@type": "HowToTool",
        name: "Study materials (provided by RTO)",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Complete FNS50322",
        text: "Enrol in and complete the Diploma of Finance and Mortgage Broking Management from an ASQA-registered RTO.",
        url: `${SITE_URL}/compare`,
        image: `${SITE_URL}/images/step-1.jpg`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Join MFAA or FBAA",
        text: "Apply for membership with the Mortgage & Finance Association of Australia or Finance Brokers Association of Australia.",
        url: `${SITE_URL}/licensing`,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Select an Aggregator",
        text: "Choose an aggregator to provide lender panel access and operate under their Australian Credit Licence.",
        url: `${SITE_URL}/licensing`,
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Register as Credit Representative",
        text: "Complete ASIC registration as a Credit Representative under your aggregator's ACL.",
        url: `${SITE_URL}/licensing`,
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Obtain PI Insurance",
        text: "Secure Professional Indemnity insurance with minimum $2 million coverage.",
        url: `${SITE_URL}/licensing`,
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Complete Police Check",
        text: "Obtain a National Police Certificate for your aggregator and lender accreditations.",
      },
      {
        "@type": "HowToStep",
        position: 7,
        name: "Complete Aggregator Onboarding",
        text: "Finish compliance training, system training, and lender accreditations.",
      },
      {
        "@type": "HowToStep",
        position: 8,
        name: "Start Writing Loans",
        text: "Begin meeting clients, conducting needs analysis, and submitting loan applications.",
      },
    ],
  };
}

// ============================================
// BREADCRUMB SCHEMA
// ============================================
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

// ============================================
// STATE PAGE SCHEMA
// ============================================
export function getStateSchema(state: ExtendedStateInfo) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/${state.slug}/#webpage`,
    name: `FNS50322 in ${state.name} | Mortgage Broker Course ${state.code}`,
    description: `Become a mortgage broker in ${state.name}. Compare ${state.providerCount} FNS50322 providers, average course cost $${state.averagePrice}. Local market insights and career tips.`,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@type": "State",
      name: state.name,
      containedInPlace: {
        "@type": "Country",
        name: "Australia",
      },
    },
    mainEntity: {
      "@type": "Course",
      name: "FNS50322 Diploma of Finance and Mortgage Broking Management",
      provider: {
        "@type": "Organization",
        name: `${state.providerCount} ASQA-registered providers in ${state.code}`,
      },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: state.averagePrice - 500,
        highPrice: state.averagePrice + 500,
        priceCurrency: "AUD",
        offerCount: state.providerCount,
      },
    },
  };
}

// ============================================
// COMPARISON TABLE SCHEMA
// ============================================
export function getComparisonTableSchema(providers: Provider[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Table",
    about: "FNS50322 Provider Comparison",
    abstract: "Side-by-side comparison of all ASQA-registered FNS50322 mortgage broker training providers in Australia, including pricing, ratings, delivery modes, and completion rates.",
  };
}

// ============================================
// REVIEW SCHEMA (Aggregate)
// ============================================
export function getAggregateReviewSchema(providers: Provider[]) {
  const totalReviews = providers.reduce((sum, p) => sum + p.reviews, 0);
  const avgRating = providers.reduce((sum, p) => sum + p.rating, 0) / providers.length;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "FNS50322 Mortgage Broker Training",
    description: "Compare mortgage broker training courses across Australia's ASQA-registered providers",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      bestRating: 5,
      worstRating: 1,
      ratingCount: totalReviews,
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: Math.min(...providers.map(p => p.pricing.fns50322.price)),
      highPrice: Math.max(...providers.map(p => p.pricing.fns50322.price)),
      priceCurrency: "AUD",
      offerCount: providers.length,
    },
  };
}

// ============================================
// MODULE/UNIT SCHEMA
// ============================================
export function getModulesSchema(modules: CourseModule[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "FNS50322 Diploma of Finance and Mortgage Broking Management",
    description: "Complete unit breakdown for the FNS50322 qualification",
    hasCourseInstance: modules.map((module) => ({
      "@type": "CourseInstance",
      name: `${module.code} - ${module.name}`,
      description: module.description,
      courseWorkload: `PT${module.hours}H`,
      courseMode: "online",
    })),
    numberOfCredits: modules.length,
    educationalCredentialAwarded: "Diploma",
  };
}

// ============================================
// SPEAKABLE SCHEMA (For Voice Search)
// ============================================
export function getSpeakableSchema(content: { headline: string; summary: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-headline", ".speakable-summary"],
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "main",
    },
  };
}

// ============================================
// COMBINED SCHEMA FOR PAGES
// ============================================
export function getHomePageSchema(providers: Provider[]) {
  return [
    getOrganizationSchema(),
    getWebSiteSchema(),
    getCourseSchema(),
    getAggregateReviewSchema(providers),
    getHowToSchema(),
  ];
}

export function getComparePageSchema(providers: Provider[]) {
  return [
    getOrganizationSchema(),
    getProviderListSchema(providers),
    getAggregateReviewSchema(providers),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Compare Providers", url: "/compare" },
    ]),
  ];
}

export function getProviderPageSchema(provider: Provider) {
  return [
    getOrganizationSchema(),
    getProviderSchema(provider),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Providers", url: "/compare" },
      { name: provider.name, url: `/providers/${provider.slug}` },
    ]),
  ];
}

export function getBlogPostSchema(post: BlogPost) {
  return [
    getOrganizationSchema(),
    getArticleSchema(post),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: post.title, url: `/blog/${post.slug}` },
    ]),
  ];
}

export function getStatePageSchema(state: ExtendedStateInfo) {
  return [
    getOrganizationSchema(),
    getStateSchema(state),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: state.name, url: `/${state.slug}` },
    ]),
  ];
}

