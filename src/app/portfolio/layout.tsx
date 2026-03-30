import { generatePageMetadata, PAGE_SEO } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = generatePageMetadata(PAGE_SEO.portfolio);

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Portfolio", href: "/portfolio" }]} />
      {children}
    </>
  );
}
