import { type Locale } from "@/lib/i18n";
import { withBasePath } from "@/lib/basePath";

interface MemoriesGalleryProps {
  locale: Locale;
  t: {
    badge: string;
    title: string;
    subtitle: string;
  };
}

interface MemoryImage {
  fileName: string;
  cardClass: string;
  imageClass: string;
}

export default function MemoriesGallery({ locale, t }: MemoriesGalleryProps) {
  const isRtl = locale === "ar";

  const topRow: MemoryImage[] = [
    { fileName: "Memory 10.jpeg", cardClass: "w-[120px] sm:w-[150px]", imageClass: "aspect-[3/4]" },
    { fileName: "Memory 1.jpeg", cardClass: "w-[210px] sm:w-[300px]", imageClass: "aspect-[4/3]" },
    { fileName: "Memory 11.jpeg", cardClass: "w-[160px] sm:w-[220px]", imageClass: "aspect-[4/3]" },
  ];

  const middleRow: MemoryImage[] = [
    { fileName: "Memory 3.jpeg", cardClass: "w-[140px] sm:w-[180px]", imageClass: "aspect-[3/4]" },
    { fileName: "Memory 5.jpeg", cardClass: "w-[220px] sm:w-[320px]", imageClass: "aspect-[4/3]" },
    { fileName: "Memory 8.jpeg", cardClass: "w-[150px] sm:w-[200px]", imageClass: "aspect-[3/4]" },
    { fileName: "Memory 4.jpeg", cardClass: "w-[200px] sm:w-[280px]", imageClass: "aspect-[16/10]" },
  ];

  const lowerRow: MemoryImage[] = [
    { fileName: "Memory 2.jpeg", cardClass: "w-[170px] sm:w-[230px]", imageClass: "aspect-[4/3]" },
    { fileName: "Memory 6.jpeg", cardClass: "w-[150px] sm:w-[190px]", imageClass: "aspect-[3/4]" },
    { fileName: "Memory 9.jpeg", cardClass: "w-[210px] sm:w-[300px]", imageClass: "aspect-[4/3]" },
  ];

  const bottomRow: MemoryImage[] = [
    { fileName: "Memory 7.jpeg", cardClass: "w-[220px] sm:w-[340px]", imageClass: "aspect-[16/10]" },
  ];

  return (
    <section className="section-py bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/35 to-transparent" />
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-gold-300/25 to-transparent" />

      <div className="container-main relative z-10">
        <div className={`mb-12 ${isRtl ? "font-arabic text-right" : "text-left"}`}>
          <span className="inline-flex items-center gap-2 text-gold-300 text-sm font-semibold tracking-widest uppercase border border-gold-400/40 bg-gold-500/10 px-4 py-1.5">
            {t.badge}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-3">
            {t.title}
          </h2>
          <span className={`block h-1 bg-gold-gradient ${isRtl ? "mr-0 ml-auto" : "ml-0 mr-auto"} w-40`} />
          <p className={`text-white/70 text-base mt-5 max-w-3xl ${isRtl ? "mr-0 ml-auto" : "ml-0 mr-auto"}`}>
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {[topRow, middleRow, lowerRow, bottomRow].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex flex-wrap justify-center items-end gap-3 sm:gap-4 ${rowIndex > 0 ? "mt-3 sm:mt-4" : ""}`}
            >
              {row.map((image) => (
                <figure
                  key={image.fileName}
                  className={`${image.cardClass} bg-navy-950/95 border border-navy-950 rounded-md p-2 shadow-[0_10px_30px_rgba(2,8,23,0.55)]`}
                >
                  <div className={`overflow-hidden rounded-sm border border-white/15 ${image.imageClass}`}>
                    <img
                      src={withBasePath(`/memories/${encodeURIComponent(image.fileName)}`)}
                      alt={isRtl ? "صورة من الذكريات" : "Memory photo"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
