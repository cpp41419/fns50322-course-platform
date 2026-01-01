/**
 * FNS50322 Provider Type Definitions
 * Diploma of Finance and Mortgage Broking Management
 */

export interface PricingOption {
  source: string;
  providerId: string;
  price: number;
  priceType: 'upfront' | 'total' | 'monthly' | 'weekly';
  discount?: number;
  discountPercentage?: number;
  fundingEligible?: boolean;
  fundingType?: 'VET Student Loan' | 'State Subsidy' | 'Payment Plan' | 'Fee-Help';
  availability: 'available' | 'limited' | 'waitlist' | 'soldout';
  spotsRemaining?: number;
  nextStartDate?: string;
  conditions?: string[];
  deliveryMode?: 'Online' | 'Face-to-face' | 'Blended' | 'Intensive';
  duration?: string;
}

export interface Provider {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  location: string;
  states: string[];
  rating: number;
  reviews: number;
  completionRate: number;
  employmentRate: number;
  pricing: {
    fns50322: PricingOption;
  };
  fundingOptions: string[];
  availabilityAlert?: string;
  deliveryModes: ('Online' | 'Face-to-face' | 'Blended' | 'Intensive')[];
  priceRange: string;
  highlights: string[];
  description: string;
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  accreditations: string[];
  membershipPathways: ('MFAA' | 'FBAA' | 'Both')[];
  aggregatorPartnerships?: string[];
  founded: string;
  studentsGraduated: number;
  featured?: boolean;
  verified?: boolean;
}

export interface CourseModule {
  code: string;
  name: string;
  description: string;
  hours: number;
  category: 'core' | 'elective';
  aka?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
  helpful: number;
  views: number;
  lastUpdated: string;
  featured: boolean;
  relatedQuestions: string[];
}

export interface FAQCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}

export interface StateInfo {
  code: string;
  name: string;
  slug: string;
  licensingBody: string;
  requirements: string[];
  averagePrice: number;
  providerCount: number;
}
