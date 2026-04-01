/**
 * MDX Content Configuration for Rising Tide Insights
 *
 * Defines content categories, SEO keyword clusters, and
 * frontmatter schema for CRE thought leadership articles.
 */

export interface InsightFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  lastModified?: string;
  author: string;
  authorTitle?: string;
  category: ContentCategory;
  tags: string[];
  keywords: string[];
  image: string;
  imageAlt: string;
  readingTime?: number;
  featured?: boolean;
  draft?: boolean;
}

export type ContentCategory =
  | 'operations'
  | 'energy-efficiency'
  | 'leasing'
  | 'market-intelligence'
  | 'technology'
  | 'asset-management'
  | 'sustainability'
  | 'tenant-experience';

export const CATEGORY_CONFIG: Record<ContentCategory, {
  label: string;
  description: string;
  color: string;
  primaryKeywords: string[];
}> = {
  operations: {
    label: 'Operations',
    description: 'Property management, maintenance optimization, and operational excellence',
    color: '#0EA5E9',
    primaryKeywords: [
      'commercial property management south florida',
      'office building operations palm beach',
      'industrial facility management',
      'property operations optimization',
      'CRE operational efficiency',
      'building maintenance best practices',
    ],
  },
  'energy-efficiency': {
    label: 'Energy Efficiency',
    description: 'Sustainability initiatives, energy audits, and green building strategies',
    color: '#22C55E',
    primaryKeywords: [
      'commercial building energy efficiency florida',
      'office energy audit palm beach county',
      'industrial energy reduction strategies',
      'LEED certification south florida',
      'green building commercial real estate',
      'utility cost reduction CRE',
    ],
  },
  leasing: {
    label: 'Leasing',
    description: 'Tenant acquisition, lease structures, and market positioning',
    color: '#8B5CF6',
    primaryKeywords: [
      'office leasing south florida',
      'industrial space for lease palm beach',
      'commercial lease negotiation',
      'tenant improvement allowance',
      'CRE leasing strategy',
      'office vacancy rates palm beach county',
    ],
  },
  'market-intelligence': {
    label: 'Market Intelligence',
    description: 'South Florida CRE market trends, data analysis, and forecasts',
    color: '#F59E0B',
    primaryKeywords: [
      'south florida commercial real estate market',
      'palm beach county office market report',
      'industrial market trends florida',
      'CRE market analysis 2026',
      'commercial real estate investment south florida',
    ],
  },
  technology: {
    label: 'Technology',
    description: 'PropTech, smart buildings, and data-driven property management',
    color: '#EC4899',
    primaryKeywords: [
      'proptech south florida',
      'smart building technology CRE',
      'commercial real estate technology',
      'AI property management',
      'building automation systems',
    ],
  },
  'asset-management': {
    label: 'Asset Management',
    description: 'Portfolio strategy, value-add execution, and NOI optimization',
    color: '#14B8A6',
    primaryKeywords: [
      'commercial real estate asset management',
      'NOI optimization strategies',
      'value-add commercial property',
      'CRE portfolio management',
      'office building repositioning',
    ],
  },
  sustainability: {
    label: 'Sustainability',
    description: 'ESG compliance, climate resilience, and environmental stewardship',
    color: '#84CC16',
    primaryKeywords: [
      'ESG commercial real estate',
      'climate resilience florida buildings',
      'sustainable CRE practices',
      'net zero commercial buildings',
      'environmental compliance CRE florida',
    ],
  },
  'tenant-experience': {
    label: 'Tenant Experience',
    description: 'Amenity programming, retention strategies, and workplace trends',
    color: '#F97316',
    primaryKeywords: [
      'tenant experience commercial real estate',
      'office tenant retention strategies',
      'workplace amenities south florida',
      'tenant satisfaction CRE',
      'hybrid workplace office design',
    ],
  },
};

export const SITE_CONFIG = {
  siteName: 'Rising Tide CRE',
  siteUrl: 'https://risingtidecre.com',
  insightsPath: '/insights',
  defaultAuthor: 'Rising Tide Team',
  defaultAuthorTitle: 'Rising Tide CRE',
  locale: 'en_US',
  market: 'South Florida / Palm Beach County',
  assetFocus: ['Office', 'Industrial'],
};
