import { generatePageMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.terms);

export default function TermsPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-slate-dark">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-display-sm md:text-display-md font-display text-cream leading-tight">
            Terms of Use
          </h1>
          <p className="mt-4 text-cream/60 text-sm">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto prose prose-lg max-w-none text-charcoal-light leading-relaxed prose-headings:text-slate-dark prose-headings:font-display">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using the Rising Tide CRE website, you accept and
            agree to be bound by these Terms of Use. If you do not agree to
            these terms, please do not use our website.
          </p>

          <h2>Use of Website</h2>
          <p>
            This website is provided for informational purposes about Rising
            Tide CRE and our commercial real estate services. You may use this
            website for lawful purposes only and in accordance with these terms.
          </p>

          <h2>No Investment Advice</h2>
          <p>
            Nothing on this website constitutes investment, financial, legal, or
            tax advice. The information provided is for general informational
            purposes only. Any investment decisions should be made in
            consultation with qualified professionals. Past performance is not
            indicative of future results.
          </p>

          <h2>No Broker-Dealer Relationship</h2>
          <p>
            Rising Tide CRE is not a registered broker-dealer, investment
            adviser, or financial planner. Use of this website does not create a
            client, advisory, or fiduciary relationship between you and Rising
            Tide CRE.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, images,
            and software, is the property of Rising Tide CRE or its content
            suppliers and is protected by United States and international
            copyright laws. You may not reproduce, distribute, or create
            derivative works from any content on this website without our
            express written permission.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            While we strive to provide accurate and up-to-date information, we
            make no representations or warranties about the completeness,
            accuracy, or reliability of any information on this website.
            Property details, market data, and other information may change
            without notice.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Rising Tide CRE shall not be liable for any direct, indirect,
            incidental, consequential, or punitive damages arising from your use
            of or inability to use this website, or from any information
            obtained through this website.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites. We are not
            responsible for the content, privacy practices, or availability of
            any linked websites. Inclusion of a link does not imply endorsement.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms of Use are governed by the laws of the State of Florida,
            without regard to conflict of law principles. Any disputes shall be
            resolved in the courts of Palm Beach County, Florida.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will
            be effective immediately upon posting to this website. Your
            continued use of the website after changes constitutes acceptance of
            the modified terms.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about these terms, please contact us at{" "}
            <a
              href="mailto:jsorenson@risingtidecre.com"
              className="text-gold no-underline hover:underline"
            >
              jsorenson@risingtidecre.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
