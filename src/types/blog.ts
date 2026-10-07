/**
 * Academic blog, articles, and research types for NextSelf platform
 */

export interface BlogAuthor {
  name: string;
  role: string;
  affiliation: string;
  avatarInitials: string;
  bio?: string;
  verified?: boolean;
}

export interface ArticleCallout {
  type: 'insight' | 'methodology' | 'warning';
  text: string;
  label?: string;
}

export interface ArticleProtocolStep {
  step: string;
  title: string;
  description: string;
}

export interface ArticleSection {
  id?: string;
  heading: string;
  subheading?: string;
  readMinutes?: number;
  body: string[];
  callout?: ArticleCallout;
  quote?: {
    text: string;
    attribution?: string;
  };
  protocolSteps?: ArticleProtocolStep[];
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  readTimeMinutes: number;
  publishedDate: string;
  updatedDate?: string;
  author: BlogAuthor;
  tags: string[];
  takeaways?: string[];
  keyQuestions?: string[];
  content: ArticleSection[];
  featured?: boolean;
}
