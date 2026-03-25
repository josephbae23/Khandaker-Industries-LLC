import { type Locale, getTranslations } from "@/lib/i18n";
import Icon from "@/components/ui/Icon";
import { withBasePath } from "@/lib/basePath";

const SERVICE_IMAGES = [
  "/services/manpower-supply.jpg",
  "/services/visa-processing.avif",
  "/services/travel-solutions.png",
  "/services/corporate-hr-consulting.jpg",
];

export default async function ServicesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = await getTranslations(locale);
  const s = t.services_page;
  const isRtl = locale === "ar";

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-60" />

        <div className="container-main relative z-10">
          <div className={isRtl ? "text-right" : "text-left"}>
            <span className="gold-badge">{isRtl ? "ما نقدمه" : "What We Offer"}</span>
            <h1 className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 leading-tight ${isRtl ? "font-arabic" : ""}`}>
              {s.hero_title}
            </h1>
            <p className="text-white/50 text-lg mt-4 max-w-xl">{s.hero_sub}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-py bg-white">
        <div className="container-main">
          <div className="space-y-0">
            {s.items.map((service: { title: string; detail: string; features: string[]; icon: string }, i: number) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`grid grid-cols-1 lg:grid-cols-2 min-h-[400px] ${
                    isEven ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex flex-col justify-center p-10 md:p-16 ${
                      isEven ? "bg-white" : "bg-sand-50"
                    } text-left`}
                  >
                    <div className="w-14 h-14 bg-navy-800 flex items-center justify-center mb-6">
                      <Icon name={service.icon} className="w-7 h-7 text-gold-400" />
                    </div>

                    <div className="text-gold-500/50 font-display text-xs tracking-widest uppercase font-bold mb-1">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="text-navy-800 font-bold text-2xl md:text-3xl mb-2 font-display">
                      {service.title}
                    </h2>
                    <div className="w-12 h-0.5 bg-gold-400 mb-5" />
                    <p className="text-navy-600/70 text-base leading-relaxed mb-6">{service.detail}</p>

                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-navy-700">
                          <div className="w-5 h-5 bg-gold-500/20 flex-shrink-0 flex items-center justify-center rounded-full">
                            <Icon name="Check" className="w-3 h-3 text-gold-600" />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service image */}
                  <div className="relative min-h-[300px] lg:min-h-[400px] overflow-hidden bg-navy-900">
                    <img
                      src={withBasePath(SERVICE_IMAGES[i] ?? SERVICE_IMAGES[0])}
                      alt=""
                      className="w-full h-full min-h-[300px] lg:min-h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-navy-900/50" />
                    <div className="absolute inset-0 dot-pattern opacity-20" />
                    {/* Number overlay */}
                    <div className="absolute bottom-6 right-6 text-white/10 font-display text-9xl font-bold leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
