import { type Locale, getTranslations } from "@/lib/i18n";
import { withBasePath } from "@/lib/basePath";

export default async function ProjectsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
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

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-60" />

        <div className="container-main relative z-10">
          <div className={isRtl ? "text-right" : "text-left"}>
            <span className="gold-badge">{isRtl ? "إنجازاتنا" : "Our Portfolio"}</span>
            <h1 className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 leading-tight ${isRtl ? "font-arabic" : ""}`}>
              {p.title}
            </h1>
            <p className="text-white/50 text-lg mt-4 max-w-xl">{p.subtitle}</p>
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
                className={`group card p-0 overflow-hidden hover:-translate-y-1 transition-all duration-300 ${isRtl ? "text-right" : "text-left"}`}
              >
                {/* Visual header */}
                <div className="relative h-40 bg-navy-800 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 dot-pattern opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950" />
                  {/* Logo */}
                  <img
                    src={withBasePath("/logo.png")}
                    alt="Khandaker Industries"
                    className="relative z-10 w-16 h-16 object-contain opacity-40 group-hover:opacity-70 transition-opacity"
                  />
                  {/* Index */}
                  <div className="absolute top-4 left-4 text-white/10 font-display font-bold text-5xl leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {/* Hover gold line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                {/* Content */}
                <div className="p-6">
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
                  <div className="w-8 h-0.5 bg-gold-400 mb-3" style={{ marginLeft: isRtl ? "auto" : "0", marginRight: isRtl ? "0" : "auto" }} />
                  <p className="text-navy-600/60 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
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
