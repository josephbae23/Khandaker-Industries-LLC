import { type Locale, getTranslations } from "@/lib/i18n";
import { withBasePath } from "@/lib/basePath";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: paramLocale } = await params;
  const locale = paramLocale as Locale;
  const t = await getTranslations(locale);
  const p = t.projects;
  const isRtl = locale === "ar";

  const tagColors = [
    "border-blue-400/40 text-blue-400",
    "border-green-400/40 text-green-400",
    "border-orange-400/40 text-orange-400",
    "border-purple-400/40 text-purple-400",
    "border-gold-400/40 text-gold-400",
    "border-red-400/40 text-red-400",
  ];

  const arrohaPhotos = [
    "WhatsApp Image 2026-03-27 at 6.20.05 PM.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.05 PM 2.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.05 PM 3.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.06 PM 4.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.06 PM 5.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.07 PM 6.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.07 PM 7.jpeg",
    "WhatsApp Image 2026-04-05 at 11.34.28 AM.jpeg",
    "WhatsApp Image 2026-04-05 at 11.34.28 AM (1).jpeg",
    "WhatsApp Image 2026-04-05 at 11.34.29 AM.jpeg",
    "WhatsApp Image 2026-04-05 at 11.34.29 AM (1).jpeg",
  ];

  const wadibedPhotos = [
    "WhatsApp Image 2026-03-27 at 6.20.20 PM 8.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.21 PM 10.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.21 PM 11.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.21 PM 9.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.22 PM 12.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.22 PM 13.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.22 PM 14.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.23 PM 15.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.23 PM 16.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.23 PM 17.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.24 PM 18.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.24 PM 19.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.25 PM 20.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.25 PM 21.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.25 PM 22.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.26 PM 23.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.26 PM 24.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.26 PM 25.jpeg",
    "WhatsApp Image 2026-03-27 at 6.20.27 PM 26.jpeg",
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-60" />

        <div className="container-main relative z-10">
          <div className={isRtl ? "text-right" : "text-left"}>
            <span className="gold-badge text-xs sm:text-sm">{isRtl ? "إنجازاتنا" : "Our Portfolio"}</span>
            <h1 className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mt-3 sm:mt-4 leading-tight ${isRtl ? "font-arabic" : ""}`}>
              {p.title}
            </h1>
            <p className="text-white/50 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-xl">{p.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-py bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.items.map((project: { title: string; tags: string[]; desc: string }, i: number) => (
              <div
                key={i}
                className={`group card p-6 overflow-hidden hover:-translate-y-1 transition-all duration-300 ${isRtl ? "text-right" : "text-left"}`}
              >
                {/* Content */}
                {/* Tags */}
                <div className={`flex flex-wrap gap-2 mb-3 ${isRtl ? "justify-end" : ""}`}>
                  {project.tags.map((tag, ti) => (
                    <span
                      key={tag}
                      className={`text-[10px] font-semibold tracking-widest uppercase border px-2 py-0.5 ${
                        tagColors[ti % tagColors.length]
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-navy-800 font-semibold text-lg mb-2 group-hover:text-gold-600 transition-colors">
                  {project.title}
                </h3>
                <div className={`w-8 h-0.5 bg-gold-400 mb-3 ${isRtl ? "ml-auto mr-0" : "ml-0 mr-auto"}`} />
                <p className="text-navy-600/60 text-sm leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Gallery */}
      <section className="section-py bg-sand-50 border-y border-navy-100">
        <div className="container-main">
          <div className={`mb-8 ${isRtl ? "text-right" : "text-left"}`}>
            <span className="gold-badge">{isRtl ? "مشاريعنا الحديثة" : "Our Recent Projects"}</span>
            <h2 className={`section-title mt-4 mb-2 ${isRtl ? "font-arabic" : ""}`}>
              {isRtl ? "معرض المشاريع الحديثة" : "Recent Projects Gallery"}
            </h2>
            <span className={isRtl ? "block w-16 h-1 bg-gold-500 mt-3 mb-4 mr-auto" : "gold-line mb-4"} />
            <p className="text-navy-600/70 text-sm md:text-base max-w-2xl">
              {isRtl
                ? "صور ميدانية حديثة من مشروعي Arroha وWadibed."
                : "Latest field photos from Arroha Project and Wadibed Project."}
            </p>
          </div>

          <div className="mb-10">
            <div className="mb-3">
              <h3 className={`text-navy-800 text-xl md:text-2xl font-semibold ${isRtl ? "font-arabic" : "font-display"}`}>
                Arroha Project
              </h3>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
              {arrohaPhotos.map((fileName) => (
                <figure
                  key={fileName}
                  className="group mb-4 break-inside-avoid overflow-hidden bg-transparent"
                >
                  <img
                    src={withBasePath(`/projects/${encodeURIComponent(fileName)}`)}
                    alt="Arroha Project"
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3">
              <h3 className={`text-navy-800 text-xl md:text-2xl font-semibold ${isRtl ? "font-arabic" : "font-display"}`}>
                Wadibed Project
              </h3>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
              {wadibedPhotos.map((fileName) => (
                <figure
                  key={fileName}
                  className="group mb-4 break-inside-avoid overflow-hidden bg-transparent"
                >
                  <img
                    src={withBasePath(`/projects/${encodeURIComponent(fileName)}`)}
                    alt="Wadibed Project"
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sand-50 border-t border-navy-100">
        <div className="container-main text-center">
          <h2 className={`font-display text-2xl md:text-3xl font-bold text-navy-800 mb-3 ${isRtl ? "font-arabic" : ""}`}>
            {isRtl ? "هل مشروعك التالي جاهز؟" : "Ready for Your Next Project?"}
          </h2>
          <p className="text-navy-600/60 mb-6">
            {isRtl ? "تواصل مع فريقنا لمناقشة احتياجاتك." : "Contact our team to discuss your workforce and travel needs."}
          </p>
          <a href={`/${locale}/contact`} className="btn-primary">
            {isRtl ? "تواصل معنا" : "Get In Touch"}
          </a>
        </div>
      </section>
    </>
  );
}
