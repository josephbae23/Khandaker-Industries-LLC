import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { withBasePath } from "@/lib/basePath";

interface HeroProps {
  locale: Locale;
  t: {
    badge: string;
    headline: string;
    subtext: string;
    cta_primary: string;
    cta_secondary: string;
    align?: "left" | "right";
  };
}

export default function Hero({ locale, t }: HeroProps) {
  const isRtl = locale === "ar";
  const align = t.align ?? (isRtl ? "right" : "left");
  const isLeft = align === "left";

  const headlineLines = t.headline.split("\n");

  return (
    <section className="relative min-h-screen overflow-hidden bg-navy-950">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={withBasePath("/video%20of%20hero.mp4")}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/35" />
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="container-main relative z-10 min-h-screen flex items-center pt-20 sm:pt-32 pb-16 sm:pb-28">
        <div className={`max-w-2xl w-full ${isLeft ? "text-left" : "text-right"}`}>
          <div className={`inline-flex items-center gap-2 text-white/90 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 ${isRtl ? "font-arabic" : ""}`}>
            <span className="w-2 h-2 bg-gold-400 rounded-full" />
            <span>{t.badge}</span>
          </div>

          <h1
            className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] sm:leading-[1.05] mb-4 sm:mb-6 ${
              isRtl ? "font-arabic" : ""
            }`}
          >
            {headlineLines.map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < headlineLines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className={`text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-6 sm:mb-10 ${isRtl ? "font-arabic" : ""}`}>
            {t.subtext}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${
              isRtl
                ? "items-start sm:items-end sm:flex-row-reverse sm:justify-end"
                : "items-start sm:justify-start"
            }`}
          >
            <a
              href="https://wa.me/966562143690"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 gap-2 sm:gap-3 w-full sm:w-auto"
            >
              {t.cta_primary}
            </a>
            <Link href={`/${locale}/contact`} className="btn-outline-white text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              {t.cta_secondary}
            </Link>
          </div>

          <div className={`mt-8 sm:mt-12 pt-6 sm:pt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 ${isRtl ? "text-right" : "text-left"}`}>
            {[
              { value: "8K+", label: isRtl ? "مشروع مكتمل" : "Projects Completed" },
              { value: "8K+", label: isRtl ? "قوى عاملة منشورة" : "Workers Deployed" },
              { value: "800+", label: isRtl ? "شريك عميل" : "Client Partners" },
              { value: "17+", label: isRtl ? "سنوات خبرة" : "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="pl-0">
                <div className="text-white font-display text-xl sm:text-2xl lg:text-3xl font-bold">{stat.value}</div>
                <div className="text-white/65 text-[10px] sm:text-xs uppercase tracking-wider mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
