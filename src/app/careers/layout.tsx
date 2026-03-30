import { generatePageMetadata, PAGE_SEO } from "@/lib/seo";
import { BreadcrumbJsonLd, JobPostingJsonLd } from "@/components/seo/JsonLd";

export const metadata = generatePageMetadata(PAGE_SEO.careers);

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Careers", href: "/careers" }]} />
      <JobPostingJsonLd
        title="Property Manager"
        description="Oversee day-to-day operations for a portfolio of commercial properties, including tenant relations, maintenance coordination, and financial reporting."
        datePosted="2026-03-01"
        location="Palm Beach County, FL"
      />
      <JobPostingJsonLd
        title="Acquisitions Analyst"
        description="Support the acquisitions team with financial modeling, market research, due diligence, and deal underwriting for commercial real estate opportunities."
        datePosted="2026-03-01"
        location="Palm Beach County, FL"
      />
      <JobPostingJsonLd
        title="Leasing Associate"
        description="Drive leasing activity across the portfolio — prospect tenants, negotiate terms, and manage the lease execution process from LOI to move-in."
        datePosted="2026-03-01"
        location="Palm Beach County, FL"
      />
      {children}
    </>
  );
}
