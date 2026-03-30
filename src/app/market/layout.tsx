import { generatePageMetadata, PAGE_SEO } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = generatePageMetadata(PAGE_SEO.market);

export default function MarketLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Market", href: "/market" }]} />
      {children}
    </>
  );
}
