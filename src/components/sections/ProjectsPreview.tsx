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
        <div className={`text-center mb-12 ${isRtl ? "font-arabic" : ""}`}>
          <span className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold tracking-widest uppercase border border-gold-500/30 bg-gold-500/10 px-4 py-1.5">
            {isRtl ? "أعمالنا" : "Our Work"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display mt-4 mb-1">
            {t.title}
          </h2>
          <span className="gold-line-center" />
          <p className="text-white/50 text-base mt-4 max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {preview.map((project, i) => (
            <div
              key={i}
              className={`group border border-white/10 hover:border-gold-500/40 bg-white/5 hover:bg-white/8 p-6 md:p-8 transition-all duration-300 ${
                isRtl ? "text-right" : "text-left"
              }`}
            >
              {/* Tags */}
              <div className={`flex flex-wrap gap-2 mb-4 ${isRtl ? "justify-end" : ""}`}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-gold-400 text-[10px] font-semibold tracking-widest uppercase border border-gold-500/30 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-gold-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{project.desc}</p>

              {/* Hover arrow */}
              <div className={`mt-4 flex ${isRtl ? "justify-end flex-row-reverse" : ""} items-center gap-2 text-gold-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity`}>
                <span>{isRtl ? "اقرأ المزيد" : "Learn More"}</span>
                <svg className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
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
