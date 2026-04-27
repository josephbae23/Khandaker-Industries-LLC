"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { withBasePath } from "@/lib/basePath";

interface NavbarProps {
  locale: Locale;
  t: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
    cta: string;
  };
}

export default function Navbar({ locale, t }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isRtl = locale === "ar";
  const otherLocale = locale === "en" ? "ar" : "en";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t.home },
    { href: `/${locale}/about`, label: t.about },
    { href: `/${locale}/services`, label: t.services },
    { href: `/${locale}/projects`, label: t.projects },
    { href: `/${locale}/contact`, label: t.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-montserrat ${
        scrolled
          ? "bg-navy-950/95 shadow-[0_12px_30px_rgba(3,9,18,0.45)] backdrop-blur-md border-b border-navy-700/60 py-3"
          : "bg-navy-900/88 backdrop-blur-sm border-b border-navy-700/50 py-5"
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 flex-shrink-0">
            <img
              src={withBasePath("/logo new.jpeg")}
              alt={isRtl ? "خنداكر إندستريز" : "Khandaker Industries"}
              className="w-11 h-11 sm:w-12 sm:h-12 object-contain"
            />
            <div className={`${isRtl ? "text-right" : "text-left"}`}>
              <div className="text-white font-montserrat font-bold text-base sm:text-lg leading-none tracking-wide">
                {isRtl ? "خنداكر إندستريز" : "KHANDAKER"}
              </div>
              <div className="text-gold-500 text-[11px] font-medium tracking-widest uppercase leading-none mt-0.5">
                {isRtl ? "ش.م.م" : "INDUSTRIES COMPANY"}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/85 hover:text-gold-400 text-base font-medium px-4 py-2 transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <Link
              href={`/${otherLocale}`}
              className="flex items-center gap-1.5 text-white/85 hover:text-gold-400 text-base font-medium transition-colors border border-navy-600 hover:border-gold-500/60 px-3 py-1.5"
            >
              <span className="text-xs">🌐</span>
              <span>{locale === "en" ? "العربية" : "English"}</span>
            </Link>

            {/* CTA */}
            <Link href={`/${locale}/contact`} className="btn-primary text-base py-2.5 px-5">
              {t.cta}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-white transition-all duration-200 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-200 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy-900/95 backdrop-blur-md border-t border-navy-700/60 mt-3">
          <div className="container-main py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/85 hover:text-gold-400 text-base font-medium px-2 py-3 border-b border-navy-700/50 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-4">
              <Link
                href={`/${otherLocale}`}
                className="text-white/85 hover:text-gold-400 text-base border border-navy-600 px-3 py-2"
              >
                {locale === "en" ? "العربية" : "English"}
              </Link>
              <Link href={`/${locale}/contact`} className="btn-primary text-base py-2 px-4">
                {t.cta}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
