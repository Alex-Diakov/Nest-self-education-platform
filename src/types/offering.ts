/**
 * Educational Offerings & Academic Services (EdTech Programs)
 */

export type OfferingCategory = 'mentorship' | 'corporate' | 'bootcamp' | 'advisory' | 'certification';

export interface OfferingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface CurriculumModule {
  index: string; // e.g. "01"
  title: string;
  duration: string; // e.g. "Тиждень 1 · 3 години"
  topics: string[];
  practicalArtifact: string; // e.g. "Особиста карта вегетативних тригерів"
}

export interface EducationalOffering {
  id: string;
  slug: string;
  title: string;
  category: OfferingCategory;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string[];
  outcomes: string[];
  format: string;
  duration: string;
  level?: 'Foundation' | 'Advanced' | 'Executive Mastery';
  plans: OfferingPlan[];
  curriculum?: CurriculumModule[];
  mentorsCount: number;
}

export interface ConsultationRequest {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  offeringId: string;
  offeringTitle: string;
  preferredPlan?: string;
  message: string;
  submittedAt: string;
  status: 'received' | 'in_review' | 'contacted';
}
