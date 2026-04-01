#!/bin/bash
# ─────────────────────────────────────────────────────────────
# Rising Tide — MDX Setup Script
#
# Run this from the project root to install MDX dependencies
# and patch next.config.mjs for MDX support.
#
# Usage:  chmod +x scripts/setup-mdx.sh && ./scripts/setup-mdx.sh
# ─────────────────────────────────────────────────────────────

set -e

echo "🌊 Rising Tide — Setting up MDX support..."

# 1. Install dependencies
echo "📦 Installing MDX packages..."
npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter next-mdx-remote rehype-slug rehype-autolink-headings rehype-pretty-code remark-gfm

echo "📦 Installing image handling packages..."
npm install sharp

# 2. Patch next.config.mjs
echo "⚙️  Patching next.config.mjs..."

cat > next.config.mjs << 'EOF'
import createMDX from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/insights/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
  },
});

export default withMDX(nextConfig);
EOF

# 3. Create mdx-components.tsx at project root (required by @next/mdx)
echo "📝 Creating mdx-components.tsx..."

cat > mdx-components.tsx << 'MDXEOF'
import type { MDXComponents } from 'mdx/types';
import { mdxComponents } from '@/components/mdx/MdxComponents';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
MDXEOF

# 4. Update package.json scripts (add content helper)
echo "📝 Adding content helper script..."
npx json -I -f package.json -e 'this.scripts["new-insight"]="node scripts/new-insight.mjs"' 2>/dev/null || true

echo ""
echo "✅ MDX setup complete!"
echo ""
echo "Next steps:"
echo "  1. Review the updated next.config.mjs"
echo "  2. Add MDX content to /content/insights/"
echo "  3. Run 'npm run dev' to test"
echo ""
