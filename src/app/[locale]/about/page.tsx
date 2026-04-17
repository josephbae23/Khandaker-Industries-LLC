import { type Locale, getTranslations } from "@/lib/i18n";
import Icon from "@/components/ui/Icon";
import { withBasePath } from "@/lib/basePath";
import LicenseGalleryPopup from "@/components/sections/LicenseGalleryPopup";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: paramLocale } = await params;
  const locale = paramLocale as Locale;
  const t = await getTranslations(locale);
  const a = t.about;
  const isRtl = locale === "ar";
  const storyCover = "/cover/WhatsApp%20Image%202026-04-02%20at%2011.54.49%20AM.jpeg";
  const licenseDocuments = [
    {
      label: "Commercial Registration Certificate",
      fileName: "CrCertificate.jpeg",
    },
    {
      label: "E-Trade License",
      fileName: "E-Trade License.jpeg",
    },
    {
      label: "Investment Registration Certificate",
      fileName: "Investment Registration Certificate 13 JUL.jpeg",
    },
    {
      label: "VAT Registration Certificate 2025",
      fileName: "VAT Registration Certifcate.jpg",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

        <div className="container-main relative z-10">
          <div className={isRtl ? "text-right" : "text-left"}>
            <span className="gold-badge">{isRtl ? "من نحن" : "About Us"}</span>
            <h1 className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 leading-tight ${isRtl ? "font-arabic" : ""}`}>
              {a.hero_title}
            </h1>
            <p className="text-white/50 text-lg mt-4 max-w-xl">{a.hero_sub}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-py bg-white">
        <div className="container-main">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${isRtl ? "lg:flex-row-reverse" : ""}`}>
            <div className={isRtl ? "text-right order-2 lg:order-1" : "order-2 lg:order-1"}>
              <span className="gold-badge">{isRtl ? "قصتنا" : "Our Story"}</span>
              <h2 className="section-title mt-4 mb-2">{a.story_title}</h2>
              <span className={isRtl ? "block w-16 h-1 bg-gold-500 mt-3 mb-6 mr-auto" : "gold-line mb-6"} />
              {a.story.split("\n\n").map((para: string, i: number) => (
                <p key={i} className="text-navy-600/70 text-base leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>

            {/* Story cover */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative bg-navy-900 h-80 lg:h-[500px] overflow-hidden">
                <img
                  src={withBasePath(storyCover)}
                  alt={isRtl ? "صورة الغلاف - قصتنا" : "Our story cover image"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900/45 via-transparent to-gold-500/10" />
              </div>
              {/* Stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-navy-100 shadow-card p-6">
                <div className="font-display text-3xl font-bold text-gold-500">17+</div>
                <div className="text-navy-600 text-sm font-medium mt-1">{isRtl ? "سنة من الخبرة" : "Years of Excellence"}</div>
              </div>
              {/* Gold corner accent */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-gold-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-py bg-white">
        <div className="container-main">
          <div className={`text-center mb-12 ${isRtl ? "font-arabic" : ""}`}>
            <span className="gold-badge">{a.leadership_badge ?? (isRtl ? "فريقنا" : "About Our Leadership")}</span>
            <h2 className="section-title mt-4 mb-2">{a.leadership_title ?? (isRtl ? "القيادة" : "Our Leadership Team")}</h2>
            <span className="gold-line-center" />

            <div className={`max-w-4xl mx-auto mt-6 text-navy-600/80 text-base leading-relaxed space-y-4 ${isRtl ? "text-right" : "text-left md:text-center"}`}>
              <p>
                {a.leadership_intro_1 ?? "At Khandaker Industries Company, our leadership team is the driving force behind our success."}
              </p>
              <p>
                {a.leadership_intro_2 ?? "Through strategic direction and operational excellence, our leadership strengthens our position as a trusted name in the industry."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                key: "khondaker_shahjahan",
                name: "Khandaker Shahjahan",
                title: "Managing Director",
                quote: [
                  "As the Managing Director, Khandaker Shahjahan leads the organization with a clear vision and unwavering determination. His leadership is defined by strategic foresight, innovation, and a deep understanding of global business dynamics. Under his guidance, the company has expanded its capabilities and strengthened its market presence.",
                  "He is committed to building long-term partnerships, fostering trust, and delivering exceptional value to clients. His focus on sustainable growth and operational excellence continues to shape the future of Khandaker Industries Company.",
                ],
                image: "/team/KHANDAKER SHAHJAHAN.jpeg",
              },
              {
                key: "md_sohel_rana",
                name: "Sohel Rana",
                title: "Director",
                quote: [
                  "Sohel Rana plays a vital role in overseeing operations and ensuring consistent service quality across all sectors. With a strong commitment to efficiency and performance, he contributes to maintaining the company\'s high standards and client satisfaction.",
                  "His practical approach and dedication to excellence support the organization\'s mission to deliver reliable and professional services, reinforcing its reputation in both corporate and individual sectors.",
                ],
                image: "/team/MD SOHEL RANA.jpeg",
              },
              {
                key: "md_muktar_husen",
                name: "Md Muktar Hussen",
                title: "Director",
                quote: [
                  "Md Muktar Hussen brings a results-oriented mindset and a focus on continuous improvement. His leadership supports the company\'s operational strength and growth initiatives, ensuring that every service meets client expectations.",
                  "With an emphasis on innovation, collaboration, and accountability, he plays a key role in transforming strategic goals into tangible outcomes, contributing to the company\'s ongoing success.",
                ],
                image: "/team/MD MUKTAR HUSEN.jpeg",
              },
              {
                key: "md_ziaur_rahman",
                name: "Md Ziaur Rahman",
                title: "Director",
                quote: [
                  "Md Ziaur Rahman provides valuable experience and insight that support the company\'s long-term vision. His commitment to integrity, trust, and disciplined growth helps guide the organization toward stability and sustained success.",
                  "He remains focused on strengthening client relationships and upholding the company\'s core values, ensuring that Khandaker Industries Company continues to grow with confidence and credibility.",
                ],
                image: "/team/MD ZIAUR RAHMAN.jpeg",
              },
            ].map((member) => (
              <div
                key={member.name}
                className={`border border-navy-100 shadow-card p-5 bg-white hover:shadow-card-hover transition-all duration-300 ${
                  isRtl ? "text-right" : "text-left"
                }`}
              >
                <div className="relative mb-6">
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <img
                      src={withBasePath(member.image)}
                      alt={member.name}
                      className="w-full h-full object-cover object-center sm:object-[center_20%] transition-transform duration-500 hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent" />
                  </div>
                </div>

                <h3 className="text-navy-800 font-semibold text-xl mb-1">
                  {a.team?.[member.key ?? ""]?.name ?? member.name}
                </h3>
                <div className="text-gold-500 text-sm font-semibold mb-4">
                  {a.team?.[member.key ?? ""]?.title ?? member.title}
                </div>
                <div className="text-navy-600/80 text-sm leading-relaxed space-y-2">
                  {(a.team?.[member.key ?? ""]?.quote ?? member.quote)?.map((line: string, idx: number) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-py bg-sand-50 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="container-main relative z-10">
          <div className={`max-w-5xl mx-auto ${isRtl ? "text-right" : "text-left"}`}>
            <span className="gold-badge">{isRtl ? "التزامنا" : a.commitment_title ?? "Our Commitment"}</span>
            <h2 className={`section-title mt-4 mb-3 ${isRtl ? "font-arabic" : ""}`}>
              {a.commitment_title ?? "Our Commitment"}
            </h2>
            <p className="text-navy-600/70 text-base md:text-lg leading-relaxed max-w-3xl">
              {a.commitment_intro ?? "Together, our leadership team is committed to:"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {(a.commitment_items ?? [
                "Delivering excellence in every service",
                "Building lasting relationships based on trust",
                "Driving innovation and continuous improvement",
                "Upholding the highest standards of integrity and professionalism",
              ]).map((item: string, idx: number) => (
                <div
                  key={idx}
                  className={`group bg-white/90 backdrop-blur-sm p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ${
                    isRtl ? "text-right" : "text-left"
                  }`}
                >
                  <div className="w-11 h-11 bg-gold-500/15 flex items-center justify-center mb-4">
                    <span className="text-gold-500 font-display text-lg font-bold">0{idx + 1}</span>
                  </div>
                  <p className="text-navy-700 text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-py bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: a.mission_title, text: a.mission, icon: "Star" },
              { title: a.vision_title, text: a.vision, icon: "Globe" },
            ].map((item, i) => (
              <div key={i} className={`border border-white/10 bg-white/5 p-8 hover:border-gold-500/30 transition-colors ${isRtl ? "text-right" : "text-left"}`}>
                <div className="w-12 h-12 bg-gold-500/20 flex items-center justify-center mb-4">
                  <Icon name={item.icon} className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-gold-400 font-semibold text-xl mb-3">{item.title}</h3>
                <div className={`w-8 h-0.5 bg-gold-500 mb-4 ${isRtl ? "ml-auto" : "mr-auto"}`} />
                <p className="text-white/60 text-base leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-sand-50">
        <div className="container-main">
          <div className={`text-center mb-12 ${isRtl ? "font-arabic" : ""}`}>
            <span className="gold-badge">{isRtl ? "قيمنا" : "Our Values"}</span>
            <h2 className="section-title mt-4 mb-2">{isRtl ? "ما يقودنا" : "What Drives Us"}</h2>
            <span className="gold-line-center" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.values.map((v: { title: string; desc: string }, i: number) => (
              <div key={i} className={`bg-white border border-navy-100 shadow-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${isRtl ? "text-right" : "text-left"}`}>
                <div className="w-8 h-8 bg-gold-gradient flex items-center justify-center mb-4">
                  <Icon name="Check" className="w-4 h-4 text-navy-900" />
                </div>
                <h4 className="text-navy-800 font-semibold text-lg mb-2">{v.title}</h4>
                <p className="text-navy-600/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="section-py bg-white">
        <div className="container-main">
          <div className={`max-w-3xl mx-auto ${isRtl ? "text-right" : "text-left"}`}>
            <span className="gold-badge">{isRtl ? "الاعتمادات" : "Credentials"}</span>
            <h2 className="section-title mt-4 mb-2">{a.licenses_title}</h2>
            <span className={isRtl ? "block w-16 h-1 bg-gold-500 mt-3 mb-8 mr-auto" : "gold-line mb-8"} />

            <ul className="space-y-4">
              {a.licenses.map((lic: string, i: number) => (
                <li key={i} className={`flex items-start gap-4 p-4 border border-navy-100 bg-sand-50 ${isRtl ? "flex-row-reverse text-right" : ""}`}>
                  <div className="w-6 h-6 bg-gold-500 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <Icon name="Check" className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-navy-700 text-sm leading-relaxed">{lic}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-navy-800 font-semibold text-base mb-4">
                {isRtl ? "المستندات المرفقة" : "Attached Documents"}
              </h3>
              <LicenseGalleryPopup items={licenseDocuments} isRtl={isRtl} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
