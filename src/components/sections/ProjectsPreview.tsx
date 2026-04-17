import Link from "next/link";
import { type Locale } from "@/lib/i18n";

interface ProjectItem { title: string; tags: string[]; desc: string }
interface ProjectsPreviewProps {
  locale: Locale;
  t: { title: string; subtitle: string; items: ProjectItem[] };
}

export default function ProjectsPreview({ locale, t }: ProjectsPreviewProps) {
  const isRtl = locale === "ar";
  const preview = t.items.slice(0, 4);

  return (
    <section className="section-py bg-navy-900 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="container-main relative z-10">
        <div className={`text-center mb-8 sm:mb-12 ${isRtl ? "font-arabic" : ""}`}>
          <span className="inline-flex items-center gap-2 text-gold-400 text-xs sm:text-sm font-semibold tracking-widest uppercase border border-gold-500/30 bg-gold-500/10 px-3 sm:px-4 py-1.5">
            {isRtl ? "أعمالنا" : "Our Work"}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display mt-3 sm:mt-4 mb-1">
            {t.title}
          </h2>
          <span className="gold-line-center" />
          <p className="text-white/50 text-xs sm:text-base mt-3 sm:mt-4 max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {preview.map((project, i) => (
            <div
              key={i}
              className={`group border border-white/10 hover:border-gold-500/40 bg-white/5 hover:bg-white/8 p-5 sm:p-6 md:p-8 transition-all duration-300 ${isRtl ? "text-right" : "text-left"}`}
            >
              {/* Tags */}
              <div className={`flex flex-wrap gap-2 mb-3 sm:mb-4 ${isRtl ? "justify-end" : ""}`}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-gold-400 text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase border border-gold-500/30 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 group-hover:text-gold-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{project.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href={`/${locale}/projects`} className="btn-outline-white gap-2 inline-flex items-center">
            {isRtl ? "مشاهدة جميع المشاريع" : "View All Projects"}
          </Link>
        </div>
      </div>
    </section>
  );
}
