import { type Locale, getTranslations } from "@/lib/i18n";
import Icon from "@/components/ui/Icon";
import { withBasePath } from "@/lib/basePath";

export default async function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = await getTranslations(locale);
  const a = t.about;
  const isRtl = locale === "ar";

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

            {/* Visual placeholder */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative bg-navy-900 h-80 lg:h-[500px] overflow-hidden flex items-center justify-center">
                {/* Decorative image placeholder */}
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <img
                  src={withBasePath("/logo.png")}
                  alt="Khandaker Industries"
                  className="relative z-10 w-32 h-32 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900/50 via-transparent to-gold-500/10" />
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
            <span className="gold-badge">{isRtl ? "فريقنا" : "Our Team"}</span>
            <h2 className="section-title mt-4 mb-2">{isRtl ? "القيادة" : "Leadership"}</h2>
            <span className="gold-line-center" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                key: "md_ziaur_rahman",
                name: "MD ZIAUR RAHMAN",
                title: "CHAIRMAN",
                quote: [
                  "Since our journey began in 2007,",
                  "Khandaker Industries LLC has",
                  "stood for trust, dedication, and",
                  "integrity. We started with a dream",
                  "to connect people and",
                  "opportunities — today that dream",
                  "has become a proud reality. Our",
                  "success is built on teamwork,",
                  "quality service, and the confidence",
                  "of our valued clients.",
                ],
                image: "/team/MD ZIAUR RAHMAN.jpeg",
              },
              {
                key: "khondaker_shahjahan",
                name: "KHANDAKER SHAHJAHAN",
                title: "MANAGING DIRECTOR & CEO",
                quote: [
                  "Khandaker Industries LLC",
                  "represents growth through hard",
                  "work and vision. From",
                  "manpower to travel and visa",
                  "services, our mission is to",
                  "deliver excellence with honesty",
                  "and care. We believe every",
                  "achievement comes from",
                  "dedication — and we continue",
                  "to build that legacy with pride.",
                ],
                image: "/team/KHANDAKER SHAHJAHAN.jpeg",
              },
              {
                key: "md_muktar_husen",
                name: "MD MUKTAR HUSEN",
                title: "DIRECTOR & GENERAL MANAGER",
                quote: [
                  "At Khandaker Industries LLC, we",
                  "don’t just provide services — we",
                  "build bridges of hope, ambition,",
                  "and progress. Our team’s",
                  "dedication and our clients’ trust",
                  "are the stars that guide our",
                  "journey. Together, we continue",
                  "to grow, to inspire, and to turn",
                  "dreams into destinations.",
                ],
                image: "/team/MD MUKTAR HUSEN.jpeg",
              },
              {
                key: "md_sohel_rana",
                name: "MD SOHEL RANA",
                title: "DIRECTOR",
                quote: [
                  "At Khandaker Industries LLC, we",
                  "believe success is built step by step",
                  "— with trust, teamwork, and",
                  "commitment. Every project we",
                  "complete is a reflection of our",
                  "passion and professionalism. Our",
                  "team’s dedication to service",
                  "excellence has made us a trusted",
                  "name in both corporate and",
                  "personal travel sectors.",
                ],
                image: "/team/MD SOHEL RANA.jpeg",
              },
            ].map((member) => (
              <div
                key={member.name}
                className={`border border-navy-100 shadow-card p-6 bg-white hover:shadow-card-hover transition-all duration-300 ${
                  isRtl ? "text-right" : "text-left"
                }`}
              >
                <div className="relative mb-6">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                      src={withBasePath(member.image)}
                      alt={member.name}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  </div>
                </div>

                <h3 className="text-navy-800 font-semibold text-xl mb-1">
                  {member.name}
                </h3>
                <div className="text-gold-500 text-sm font-semibold mb-4">
                  {isRtl
                    ? a.team?.[member.key ?? ""]?.title ?? member.title
                    : member.title}
                </div>
                <div className="text-navy-600/80 text-sm leading-relaxed space-y-2">
                  {(isRtl
                    ? a.team?.[member.key ?? ""]?.quote
                    : member.quote
                  )?.map((line: string, idx: number) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
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
                <div className="w-8 h-0.5 bg-gold-500 mb-4" style={{ marginLeft: isRtl ? "auto" : "0", marginRight: isRtl ? "0" : "auto" }} />
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
          </div>
        </div>
      </section>
    </>
  );
}
