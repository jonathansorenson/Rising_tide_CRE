/**
 * Custom MDX Components for Rising Tide Insights
 *
 * These components are available in all MDX files and provide
 * consistent styling aligned with the Rising Tide design system.
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ── Hero Image ───────────────────────────────────────────── */
interface HeroImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export function HeroImage({ src, alt, caption }: HeroImageProps) {
  return (
    <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden my-8">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
      />
      {caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4 text-sm text-white/90">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ── Callout / Pull Quote ─────────────────────────────────── */
interface CalloutProps {
  type?: 'insight' | 'warning' | 'tip' | 'stat';
  children: React.ReactNode;
}

const calloutStyles = {
  insight: 'border-sky-500 bg-sky-500/10',
  warning: 'border-amber-500 bg-amber-500/10',
  tip: 'border-emerald-500 bg-emerald-500/10',
  stat: 'border-violet-500 bg-violet-500/10',
};

const calloutIcons = {
  insight: '💡',
  warning: '⚠️',
  tip: '✅',
  stat: '📊',
};

export function Callout({ type = 'insight', children }: CalloutProps) {
  return (
    <aside
      className={`border-l-4 rounded-r-lg px-6 py-4 my-6 ${calloutStyles[type]}`}
      role="note"
    >
      <span className="mr-2">{calloutIcons[type]}</span>
      {children}
    </aside>
  );
}

/* ── Stat Block ───────────────────────────────────────────── */
interface StatBlockProps {
  stats: { label: string; value: string; change?: string }[];
}

export function StatBlock({ stats }: StatBlockProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center"
        >
          <div className="text-2xl font-bold text-white">{stat.value}</div>
          {stat.change && (
            <div
              className={`text-xs font-medium ${
                stat.change.startsWith('+')
                  ? 'text-emerald-400'
                  : 'text-red-400'
              }`}
            >
              {stat.change}
            </div>
          )}
          <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ── CTA Banner ───────────────────────────────────────────── */
interface CTAProps {
  title: string;
  description: string;
  href: string;
  buttonText?: string;
}

export function CTA({ title, description, href, buttonText = 'Learn More' }: CTAProps) {
  return (
    <div className="bg-gradient-to-r from-sky-900/50 to-indigo-900/50 border border-sky-700/30 rounded-xl p-8 my-8 text-center">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-300 mb-4">{description}</p>
      <Link
        href={href}
        className="inline-block bg-sky-500 hover:bg-sky-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  );
}

/* ── Table of Contents (auto-generated) ───────────────────── */
interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ items }: { items: TOCItem[] }) {
  return (
    <nav className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 my-8">
      <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
        In This Article
      </h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: `${(item.level - 2) * 16}px` }}
          >
            <a
              href={`#${item.id}`}
              className="text-sm text-slate-300 hover:text-sky-400 transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ── Default MDX component overrides ──────────────────────── */
export const mdxComponents = {
  HeroImage,
  Callout,
  StatBlock,
  CTA,
  TableOfContents,
  // Override default HTML elements for consistent styling
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold text-white mt-12 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-bold text-white mt-10 mb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold text-white mt-8 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-slate-300 leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4 ml-4" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside text-slate-300 space-y-2 mb-4 ml-4" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-slate-300 leading-relaxed" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-sky-500 pl-6 py-2 my-6 italic text-slate-400"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-sky-400 hover:text-sky-300 underline transition-colors" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-slate-800 px-1.5 py-0.5 rounded text-sm text-sky-300" {...props} />
  ),
  hr: () => <hr className="border-slate-700 my-8" />,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-lg my-6 w-full" alt={props.alt || ''} {...props} />
  ),
};
