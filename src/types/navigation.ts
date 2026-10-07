/**
 * Navigation and Routing types for NextSelf platform
 */

export type PageId = 'home' | 'services' | 'blog' | 'tests' | 'offerings' | 'about' | 'styleguide';

export interface RouteState {
  page: PageId;
  params?: Record<string, string>;
  subview?: string;
  itemId?: string;
}

export interface NavItem {
  id: PageId;
  label: string;
  description?: string;
  badge?: string;
}
