import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { type Locale } from "@/lib/i18n";
import { withBasePath } from "@/lib/basePath";

const SERVICE_IMAGES = [
  "/services/manpower-supply.jpg",
  "/services/visa-processing.avif",
  "/services/travel-solutions.png",
  "/services/corporate-hr-consulting.jpg",
];

interface ServiceItem { title: string; desc: string; icon: string }

interface ServicesPreviewProps {
  locale: Locale;
  t: { title: string; subtitle: string; items: ServiceItem[] };
}

export default function ServicesPreview({ locale, t }: ServicesPreviewProps) {
  const isRtl = locale === "ar";

  return (
    <section className="section-py bg-sand-50 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Decorative side element */}
      <div className={`absolute top-0 bottom-0 w-1 bg-gold-gradient hidden lg:block ${isRtl ? "right-0" : "left-0"}`} />

      <div className="container-main relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className={isRtl ? "text-right" : "text-left"}>
            <span className="gold-badge text-xs sm:text-sm">{isRtl ? "ما نقدمه" : "What We Offer"}</span>
            <h2 className="section-title mt-3 sm:mt-4 mb-1">{t.title}</h2>
            <span className={isRtl ? "block w-16 h-1 bg-gold-500 mt-3 ml-auto" : "gold-line"} />
          </div>
          <p className={`text-navy-600/70 text-sm sm:text-base max-w-md leading-relaxed ${isRtl ? "text-right" : "text-left"}`}>
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.items.map((item, i) => (
            <div
              key={i}
              className="relative bg-white border border-navy-100 overflow-hidden group hover:border-gold-400 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Service image */}
              <div className="relative h-32 sm:h-40 overflow-hidden bg-navy-100">
                <img
                  src={withBasePath(SERVICE_IMAGES[i] ?? SERVICE_IMAGES[0])}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              </div>

              <div className="p-5 sm:p-6 relative">
                {/* Corner accent */}
                {isRtl ? (
                  <div className="absolute top-0 left-0 w-0 h-0 border-r-[30px] sm:border-r-[40px] border-r-transparent border-t-[30px] sm:border-t-[40px] border-t-gold-400/10 group-hover:border-t-gold-400/30 transition-colors" />
                ) : (
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] sm:border-l-[40px] border-l-transparent border-t-[30px] sm:border-t-[40px] border-t-gold-400/10 group-hover:border-t-gold-400/30 transition-colors" />
                )}

                {/* Icon */}
                <div className={`w-10 sm:w-12 h-10 sm:h-12 bg-navy-50 border border-navy-100 flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-navy-800 group-hover:border-navy-800 transition-colors duration-300 ${isRtl ? "ml-auto" : ""}`}>
                  <Icon name={item.icon} className="w-5 sm:w-6 h-5 sm:h-6 text-gold-500 group-hover:text-gold-400 transition-colors" />
                </div>

                <h3 className={`text-navy-800 font-semibold text-base sm:text-lg mb-2 ${isRtl ? "text-right" : "text-left"}`}>{item.title}</h3>
                <p className={`text-navy-600/60 text-xs sm:text-sm leading-relaxed relative z-10 ${isRtl ? "text-right" : "text-left"}`}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-10 ${isRtl ? "text-right" : "text-left"}`}>
          <Link href={`/${locale}/services`} className="btn-outline gap-2 inline-flex items-center">
            {isRtl ? "عرض جميع الخدمات" : "View All Services"}
            <Icon name="ArrowRight" className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}
