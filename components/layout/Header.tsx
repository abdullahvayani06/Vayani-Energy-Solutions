"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, Mail } from "lucide-react";
import { mainNav } from "@/data/nav";
import { site } from "@/data/site";
import Logo from "@/components/ui/Logo";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hidden bg-navy-dark lg:block">
        <div className="container-vayani flex h-9 items-center justify-end gap-6 text-[12px] text-white/60">
          <a href={site.emailHref} className="flex items-center gap-1.5 hover:text-white focus-ring">
            <Mail className="h-3.5 w-3.5" aria-hidden />
            {site.email}
          </a>
          <span className="h-3 w-px bg-white/15" aria-hidden />
          <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-white focus-ring">
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {site.phoneDisplay}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
          scrolled ? "border-border-brand bg-white/95 shadow-sm backdrop-blur-sm" : "border-transparent bg-white"
        }`}
      >
        <div className="container-vayani flex h-[72px] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-1 text-[13px] font-medium tracking-wide uppercase text-navy/70 transition-colors hover:text-navy focus-ring"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-green-dark transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact#quote"
              data-cta="header-quote"
              className="rounded-sm bg-green px-5 py-3 text-[13px] font-semibold tracking-wide uppercase text-navy transition-colors hover:bg-green-dark focus-ring"
            >
              Get a Free Estimate
            </Link>
          </div>

          <button
            className="p-2 -mr-2 lg:hidden focus-ring"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-6 w-6 text-navy" aria-hidden />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
