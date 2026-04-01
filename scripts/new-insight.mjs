#!/usr/bin/env node
/**
 * Helper script to scaffold a new MDX insight article.
 *
 * Usage:
 *   node scripts/new-insight.mjs "Article Title" category
 *
 * Example:
 *   node scripts/new-insight.mjs "Energy Audits That Pay for Themselves" energy-efficiency
 */

import fs from 'fs';
import path from 'path';

const title = process.argv[2];
const category = process.argv[3] || 'operations';

if (!title) {
  console.error('Usage: node scripts/new-insight.mjs "Article Title" category');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const date = new Date().toISOString().split('T')[0];

const template = `---
title: "${title}"
slug: "${slug}"
description: ""
date: "${date}"
author: "Rising Tide Team"
authorTitle: "Rising Tide Property Group"
category: "${category}"
tags: []
keywords: []
image: "/images/insights/${slug}.jpg"
imageAlt: "${title}"
featured: false
draft: true
---

<HeroImage
  src="/images/insights/${slug}.jpg"
  alt="${title}"
/>

## Introduction

[Opening paragraph — hook the reader with a market stat or trend relevant to South Florida office/industrial]

---

## [Section 1 Title]

[Content]

## [Section 2 Title]

[Content]

<Callout type="insight">
  Key takeaway or market stat here.
</Callout>

## [Section 3 Title]

[Content]

## What This Means for South Florida

[Local market application and actionable insights]

---

<CTA
  title="Ready to optimize your property?"
  description="Rising Tide brings data-driven strategies to every asset in our portfolio."
  href="/contact"
  buttonText="Get in Touch"
/>
`;

const outDir = path.join(process.cwd(), 'content', 'insights');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const outPath = path.join(outDir, `${slug}.mdx`);
fs.writeFileSync(outPath, template, 'utf-8');

console.log(`✅ Created: content/insights/${slug}.mdx`);
console.log(`📝 Category: ${category}`);
console.log(`🔗 URL: /insights/${slug}`);
`;
