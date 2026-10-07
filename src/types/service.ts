/**
 * Educational digital services and interactive psychotechnology tools
 */

export type ServiceCategory = 'dev' | 'analytics' | 'ai' | 'simulation' | 'collaborative';

export interface EduService {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  status: 'active' | 'beta' | 'preview';
  icon: string;
  metrics: {
    label: string;
    value: string;
  }[];
  features: string[];
  capabilities: string[];
  interactiveType:
    | 'code-sandbox'
    | 'ratio-explorer'
    | 'tree-visualizer'
    | 'flashcard-engine'
    | 'breath-pacer'
    | 'distortion-analyzer'
    | 'fear-matrix';
}
