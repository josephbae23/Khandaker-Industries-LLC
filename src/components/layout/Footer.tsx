import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { withBasePath } from "@/lib/basePath";

interface FooterProps {
  locale: Locale;
  t: {
    tagline: string;
    dhaka: { label: string; address: string };
    jeddah: { label: string; address: string };
    phone: string;
    phone_jeddah: string;
    email: string;
    copyright: string;
    links: string[];
  };
}

export default function Footer({ locale, t }: FooterProps) {
  const isRtl = locale === "ar";
  const navLinks = [
    { href: `/${locale}`, label: locale === "ar" ? "الرئيسية" : "Home" },
    { href: `/${locale}/about`, label: locale === "ar" ? "من نحن" : "About" },
    { href: `/${locale}/services`, label: locale === "ar" ? "خدماتنا" : "Services" },
    { href: `/${locale}/projects`, label: locale === "ar" ? "مشاريعنا" : "Projects" },
    { href: `/${locale}/contact`, label: locale === "ar" ? "اتصل بنا" : "Contact" },
  ];

  return (
    <footer className="bg-navy-950 text-white" dir={isRtl ? "rtl" : "ltr"}>
      {/* Top Strip */}
      <div className="bg-gold-gradient h-1" />

      <div className="container-main py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
          {/* Brand */}
          <div className={`lg:col-span-1 ${isRtl ? "text-right" : "text-left"}`}>
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-4" style={{ flexDirection: isRtl ? "row-reverse" : "row", justifyContent: isRtl ? "flex-end" : "flex-start" }}>
              <img
                src={withBasePath("/logo latest.JPG")}
                alt={isRtl ? "خنداكر إندستريز" : "Khandaker Industries"}
                className="w-10 h-10 object-contain flex-shrink-0"
              />
              <div>
                <div className="text-white font-display font-bold text-sm tracking-wide">
                  {isRtl ? "خنداكر إندستريز" : "KHANDAKER INDUSTRIES"}
                </div>
                <div className="text-gold-400 text-[10px] tracking-widest uppercase">{isRtl ? "ش.م.م" : "COMPANY"}</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">{t.tagline}</p>
          </div>

          {/* Quick Links */}
          <div className={isRtl ? "text-right" : "text-left"}>
            <h4 className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">
              {isRtl ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dhaka Office */}
          <div className={isRtl ? "text-right" : "text-left"}>
            <h4 className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">
              {t.dhaka.label}
            </h4>
            <div className="space-y-2">
              <p className="text-white/60 text-sm leading-relaxed">{t.dhaka.address}</p>
              <p className="text-white/60 text-sm" dir="ltr">{t.phone}</p>
              <a href={`mailto:${t.email}`} className="text-white/60 hover:text-gold-400 text-sm transition-colors block" dir="ltr">
                {t.email}
              </a>
            </div>
          </div>

          {/* Al Jubail Office */}
          <div className={isRtl ? "text-right" : "text-left"}>
            <h4 className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">
              {t.jeddah.label}
            </h4>
            <div className="space-y-2">
              <p className="text-white/60 text-sm leading-relaxed">{t.jeddah.address}</p>
              <p className="text-white/60 text-sm" dir="ltr">{t.phone_jeddah}</p>
              <a href={`mailto:${t.email}`} className="text-white/60 hover:text-gold-400 text-sm transition-colors block" dir="ltr">
                {t.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/40 text-xs">{t.copyright}</p>
          <div className={`flex items-center gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
