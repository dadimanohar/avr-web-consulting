export interface FAQItem {
  id?: string;
  question: string;
  answer: string;
  category: string;
}

export interface MetricItem {
  label: string;
  value: string;
  subtext: string;
}

export interface ServiceItem {
  id: string;
  hub: 'seo' | 'ai-seo' | 'ppc' | 'content' | 'web-dev';
  title: string;
  description: string;
  detailedContent: string;
  benefits: string[];
  keySpecs: string[];
  faqs: FAQItem[];
  schemaMarkup?: string;
  iconName: string; // lucide icon identifier
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  intro: string;
  challenges: string[];
  solutions: string[];
  results: string;
  keywordsUsed: string[];
}

export interface CityLandingData {
  id: string;
  cityName: string;
  metaTitle: string;
  metaDescription: string;
  introText: string;
  localChallenges: string;
  mapEmbedUrl?: string;
  localKeywords: string[];
  faqs: FAQItem[];
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  contentMarkdown: string;
  tags: string[];
  faqs: FAQItem[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  industry: string;
  category: 'seo' | 'ai-visibility' | 'ppc';
  duration: string;
  metrics: MetricItem[];
  challenge: string;
  solution: string;
  impactResult: string;
}

export interface PricingPlan {
  id: string;
  category: 'seo' | 'ai-seo' | 'ppc';
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ClientLead {
  name: string;
  email: string;
  phone: string;
  website?: string;
  service: string;
  city?: string;
  message: string;
  submittedAt: string;
}
