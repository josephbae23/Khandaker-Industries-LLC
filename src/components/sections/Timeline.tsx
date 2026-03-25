import { type Locale } from "@/lib/i18n";

interface TimelineItem { year: string; event: string }
interface TimelineProps {
  locale: Locale;
  t: { title: string; subtitle: string; items: TimelineItem[] };
}

export default function Timeline({ locale, t }: TimelineProps) {
  const isRtl = locale === "ar";

  return (
    <section className="section-py bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sand-50 to-white" />

      {/* Decorative vertical gold line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-300/50 to-transparent hidden lg:block" />

      <div className="container-main relative z-10">
        <div className={`text-center mb-16 ${isRtl ? "font-arabic" : ""}`}>
          <span className="gold-badge">{isRtl ? "تاريخنا" : "Our History"}</span>
          <h2 className="section-title mt-4 mb-1">{t.title}</h2>
          <span className="gold-line-center" />
          <p className="text-navy-600/60 text-base mt-4 max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          {t.items.map((item, i) => {
            const isLeft = isRtl ? i % 2 !== 0 : i % 2 === 0;
            return (
              <div key={i} className={`flex items-center mb-10 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                {/* Content */}
                <div className={`w-5/12 ${isLeft ? "text-right pr-10" : "text-left pl-10"}`}>
                  <div className={`bg-white border border-navy-100 shadow-card p-6 hover:shadow-card-hover transition-all duration-300 group ${isLeft ? "" : ""}`}>
                    <span className="font-display text-gold-500 font-bold text-2xl">{item.year}</span>
                    <div className="w-8 h-0.5 bg-gold-400 my-2 ml-auto group-hover:w-12 transition-all" style={{ marginLeft: isLeft ? "auto" : "0", marginRight: isLeft ? "0" : "auto" }} />
                    <p className="text-navy-700 text-sm leading-relaxed">{item.event}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="w-2/12 flex items-center justify-center relative">
                  <div className="w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow-gold z-10" />
                </div>

                {/* Empty space */}
                <div className="w-5/12" />
              </div>
            );
          })}
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden relative pl-8 border-l-2 border-gold-300/40">
          {t.items.map((item, i) => (
            <div key={i} className={`mb-8 relative ${isRtl ? "text-right pr-4" : "text-left"}`}>
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow-gold" />
              <div className="bg-white border border-navy-100 shadow-card p-5">
                <span className="font-display text-gold-500 font-bold text-xl">{item.year}</span>
                <div className="w-8 h-0.5 bg-gold-400 my-2" />
                <p className="text-navy-700 text-sm leading-relaxed">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
