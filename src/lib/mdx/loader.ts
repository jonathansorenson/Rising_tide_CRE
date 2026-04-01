/**
 * MDX Content Loader
 *
 * Reads .mdx files from /content/insights, parses frontmatter,
 * and provides sorted/filtered access to articles.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { InsightFrontmatter, ContentCategory } from './config';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'insights');

export interface InsightPost {
  frontmatter: InsightFrontmatter;
  content: string;
  slug: string;
}

/**
 * Get all published insight posts, sorted by date (newest first).
 */
export function getAllInsights(): InsightPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'));

  const posts = files
    .map((filename) => {
      const filePath = path.join(CONTENT_DIR, filename);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);
      const slug = filename.replace(/\.mdx$/, '');

      return {
        frontmatter: { ...data, slug } as InsightFrontmatter,
        content,
        slug,
      };
    })
    .filter((post) => !post.frontmatter.draft)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );

  return posts;
}

/**
 * Get a single insight by slug.
 */
export function getInsightBySlug(slug: string): InsightPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    frontmatter: { ...data, slug } as InsightFrontmatter,
    content,
    slug,
  };
}

/**
 * Get insights filtered by category.
 */
export function getInsightsByCategory(category: ContentCategory): InsightPost[] {
  return getAllInsights().filter(
    (post) => post.frontmatter.category === category
  );
}

/**
 * Get all unique tags across published insights.
 */
export function getAllTags(): string[] {
  const posts = getAllInsights();
  const tagSet = new Set<string>();
  posts.forEach((p) => p.frontmatter.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

/**
 * Get all slugs for static generation.
 */
export function getAllInsightSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

/**
 * Calculate estimated reading time (words / 225 wpm).
 */
export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 225));
}
