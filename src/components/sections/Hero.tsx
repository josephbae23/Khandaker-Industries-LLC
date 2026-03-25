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
  // For RTL, keep text alignment right but swap the visual ordering of text & video
  const textOnLeft = isRtl ? !isLeft : isLeft;

  const headlineLines = t.headline.split("\n");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background — solid navy for seamless transition to highlights (EN & AR) */}
      <div className="absolute inset-0 bg-navy-950">
        {/* Geometric pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
        {/* Decorative geometric shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-gold-500/10 rotate-45 hidden lg:block" />
        <div className="absolute top-32 right-32 w-48 h-48 border border-gold-500/5 rotate-45 hidden lg:block" />
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-white/5 hidden lg:block" />
        {/* Horizontal accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      </div>

      <div className="container-main relative z-10 pt-32 pb-20">
        <div className="grid gap-10 lg:grid-cols-2 items-stretch">
          {/* Text */}
          <div
            className={`flex flex-col justify-center max-w-3xl ${
              textOnLeft ? "lg:order-1" : "lg:order-2"
            } ${isLeft ? "text-left" : "text-right"}`}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 border border-gold-500/40 bg-gold-500/10 px-4 py-2 mb-8"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
                {t.badge}
              </span>
            </div>

            {/* Headline — unified scale for EN & AR so locale switch is seamless */}
            <h1
              className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 ${
                isLeft ? "text-left" : "text-right"
              }`}
              style={isRtl ? { fontFamily: "Cairo, Arial, sans-serif" } : {}}
            >
              {headlineLines.map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx < headlineLines.length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Subtext — unified size for seamless EN/AR switch */}
            <p
              className={`text-white/60 text-sm md:text-base leading-relaxed max-w-xl mb-10 ${
                isRtl ? "text-right" : "text-left"
              }`}
              style={isRtl ? { fontFamily: "Cairo, Arial, sans-serif" } : {}}
            >
              {t.subtext}
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 ${
                isRtl
                  ? "items-end sm:flex-row-reverse sm:justify-end"
                  : "items-start sm:justify-start"
              }`}
            >
              <a
                href="https://wa.me/8801772909679"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4 gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.cta_primary}
              </a>

              <Link
                href={`/${locale}/contact`}
                className="btn-outline-white text-base px-8 py-4"
              >
                {t.cta_secondary}
              </Link>
            </div>

            {/* Stats strip */}
            <div
              className={`flex flex-wrap gap-8 mt-16 pt-10 border-t border-white/10 ${
                isRtl ? "flex-row-reverse justify-end" : "justify-start"
              }`}
            >
              {[
                { value: "17+", label: isRtl ? "سنوات الخبرة" : "Years Experience" },
                { value: "5K+", label: isRtl ? "عمال تم توظيفهم" : "Workers Placed" },
                { value: "2", label: isRtl ? "مكاتب في دولتين" : "Country Offices" },
                { value: "100%", label: isRtl ? "معتمد حكومياً" : "Govt. Approved" },
              ].map((stat) => (
                <div key={stat.value} className={isLeft ? "text-left" : "text-right"}>
                  <div className="text-gold-400 font-display text-xl md:text-2xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video (opposite side) */}
          <div
            className={`hidden xl:flex ${
              textOnLeft ? "lg:order-2 justify-end" : "lg:order-1 justify-start"
            } items-center`}
          >
            <div className="relative w-full max-w-3xl h-full min-h-[440px] overflow-hidden rounded-2xl shadow-xl">
              <video
                className="w-full h-full object-cover"
                src={withBasePath("/video%20of%20hero.mp4")}
                autoPlay
                muted
                loop
                playsInline
              />
              <div
                className={`absolute inset-0 ${
                  isLeft
                    ? "bg-gradient-to-l from-navy-950/70 to-transparent"
                    : "bg-gradient-to-r from-navy-950/70 to-transparent"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
