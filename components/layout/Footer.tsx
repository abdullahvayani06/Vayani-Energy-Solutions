import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { mainNav } from "@/data/nav";
import { site } from "@/data/site";
import Logo from "@/components/ui/Logo";

const serviceLinks = [
  { label: "Hybrid Solar Systems", href: "/hybrid-solar-systems" },
  { label: "Solar Panels", href: "/what-we-do#solar-panels" },
  { label: "Hybrid Inverters", href: "/what-we-do#hybrid-inverters" },
  { label: "Lithium Batteries", href: "/what-we-do#lithium-battery" },
  { label: "Installation", href: "/what-we-do#installation" },
  { label: "After-Sales Support", href: "/what-we-do#after-sales" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="container-vayani py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">{site.statement}</p>
            <Link
              href="/contact#quote"
              data-cta="footer-quote"
              className="mt-6 inline-flex rounded-sm bg-green px-5 py-3 text-[13px] font-semibold tracking-wide uppercase text-navy transition-colors hover:bg-green-dark focus-ring"
            >
              Get a Free Estimate
            </Link>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.18em] uppercase text-white/50">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/75 hover:text-green focus-ring">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.18em] uppercase text-white/50">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/75 hover:text-green focus-ring">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.18em] uppercase text-white/50">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-2.5 hover:text-green focus-ring">
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="flex items-center gap-2.5 hover:text-green focus-ring">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                {site.serviceArea}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Vayani Energy Solutions. All rights reserved.</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
