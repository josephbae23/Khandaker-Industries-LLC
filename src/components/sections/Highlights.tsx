import Icon from "@/components/ui/Icon";
import { type Locale } from "@/lib/i18n";

interface HighlightItem {
  icon: string;
  label: string;
  value: string;
  desc: string;
}

interface HighlightsProps {
  locale: Locale;
  t: { title: string; items: HighlightItem[] };
}

export default function Highlights({ locale, t }: HighlightsProps) {
  const isRtl = locale === "ar";

  return (
    <section className="section-py bg-white relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

      <div className="container-main">
        <div className={`text-center mb-8 sm:mb-12 ${isRtl ? "font-arabic" : ""}`}>
          <span className="gold-badge text-xs sm:text-sm">{isRtl ? "مزايانا" : "Our Strengths"}</span>
          <h2 className="section-title mt-3 sm:mt-4 mb-2">{t.title}</h2>
          <span className="gold-line-center" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {t.items.map((item, i) => (
            <div
              key={i}
              className={`card p-6 sm:p-8 group hover:-translate-y-1 transition-all duration-300 ${isRtl ? "text-right" : "text-left"}`}
            >
              {/* Icon */}
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-navy-800 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                <Icon name={item.icon} className="w-6 sm:w-7 h-6 sm:h-7 text-gold-400 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Value */}
              <div className="font-display text-3xl sm:text-4xl font-bold text-gold-500 mb-1">
                {item.value}
              </div>

              {/* Label */}
              <div className="text-navy-800 font-semibold text-base sm:text-lg mb-2">{item.label}</div>

              {/* Divider */}
              <div className={`w-8 h-0.5 bg-gold-400 mb-3 ${isRtl ? 'ml-auto' : 'mr-auto'}`} />

              {/* Description */}
              <p className="text-navy-600/70 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
