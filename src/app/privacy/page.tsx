import { generatePageMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.privacy);

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-slate-dark">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-display-sm md:text-display-md font-display text-cream leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-cream/60 text-sm">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto prose prose-lg max-w-none text-charcoal-light leading-relaxed prose-headings:text-slate-dark prose-headings:font-display">
          <h2>Information We Collect</h2>
          <p>
            Rising Tide CRE collects information you voluntarily provide when
            using our website, including through our contact form. This may
            include your name, email address, phone number, company name, and
            message content. We collect this information to respond to your
            inquiries and provide our services.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to inquiries submitted through our contact form</li>
            <li>Provide information about our property management, acquisitions, and leasing services</li>
            <li>Process career applications</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>
            Our website uses the following third-party services that may collect
            anonymized usage data:
          </p>
          <ul>
            <li>
              <strong>Vercel Analytics</strong> &mdash; Website performance
              monitoring and anonymized page view tracking
            </li>
            <li>
              <strong>HubSpot</strong> &mdash; Customer relationship management
              for processing contact form submissions
            </li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Our website uses essential cookies required for site functionality.
            We do not use advertising or tracking cookies. Third-party analytics
            services may use anonymized cookies to measure site performance.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal
            information. However, no method of transmission over the Internet is
            completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal information by contacting us at{" "}
            <a
              href="mailto:jsorenson@risingtidecre.com"
              className="text-gold no-underline hover:underline"
            >
              jsorenson@risingtidecre.com
            </a>
            . We will respond to your request within a reasonable timeframe.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us
            at{" "}
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
