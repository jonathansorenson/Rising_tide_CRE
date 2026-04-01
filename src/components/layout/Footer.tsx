import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, NAV_ITEMS, SERVICE_PILLARS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-dark text-cream/70" role="contentinfo">
      <div className="container-wide mx-auto section-padding">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Rising Tide CRE Home">
              <Image
                src="/logos/RT_PrimaryB 2000x600.png"
                alt="Rising Tide CRE"
                width={280}
                height={84}
                className="h-16 w-auto mb-6"
              />
            </Link>
            <p className="text-sm leading-relaxed mt-4">
              A vertically integrated commercial real estate firm operating
              across property management, acquisitions, and leasing in
              South Florida&apos;s Palm Beach County.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.filter((item) =>
                ["/about", "/portfolio", "/market", "/insights"].includes(item.href)
              ).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICE_PILLARS.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-gold transition-colors"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>{SITE_CONFIG.address.full}</li>
              <li>
                <a
                  href="mailto:jsorenson@risingtidecre.com"
                  className="hover:text-gold transition-colors"
                >
                  jsorenson@risingtidecre.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:nwest@risingtidecre.com"
                  className="hover:text-gold transition-colors"
                >
                  nwest@risingtidecre.com
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/careers"
                  className="text-gold hover:text-gold-light font-medium transition-colors"
                >
                  Join Our Team &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Rising Tide CRE. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-cream/40 hover:text-cream/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-cream/40 hover:text-cream/70 transition-colors"
            >
              Terms of Use
            </Link>
            {SITE_CONFIG.social.linkedin && (
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cream/40 hover:text-cream/70 transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
