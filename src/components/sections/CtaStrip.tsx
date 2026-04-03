import Link from "next/link";
import { type Locale } from "@/lib/i18n";

interface CtaStripProps {
  locale: Locale;
  t: { headline: string; subtext: string; btn: string };
}

export default function CtaStrip({ locale, t }: CtaStripProps) {
  const isRtl = locale === "ar";

  return (
    <section className="relative overflow-hidden bg-navy-gradient py-20">
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-40" />

      {/* Decorative elements */}
      <div className="absolute top-6 left-10 w-24 h-24 border border-gold-500/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-6 right-10 w-16 h-16 border border-gold-500/10 rotate-12 hidden lg:block" />
      <div className="absolute inset-0 dot-pattern opacity-10" />

      <div className="container-main relative z-10 text-center">
        <h2
          className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 ${
            isRtl ? "font-arabic" : ""
          }`}
        >
          {t.headline}
        </h2>
        <p className={`text-white/60 text-base md:text-lg max-w-lg mx-auto mb-10 ${isRtl ? "font-arabic" : ""}`}>
          {t.subtext}
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRtl ? "flex-row-reverse" : ""}`}>
          <Link href={`/${locale}/contact`} className="btn-primary text-base px-10 py-4">
            {t.btn}
          </Link>
          <a
            href="https://wa.me/966562143690"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white text-base px-10 py-4"
          >
            {isRtl ? "تواصل عبر واتساب" : "WhatsApp Us"}
          </a>
        </div>
      </div>
    </section>
  );
}
