import { type Locale, getTranslations } from "@/lib/i18n";
import Icon from "@/components/ui/Icon";
import ContactForm from "@/components/sections/ContactForm";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: paramLocale } = await params;
  const locale = paramLocale as Locale;
  const t = await getTranslations(locale);
  const c = t.contact;
  const f = t.footer;
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
            <span className="gold-badge text-xs sm:text-sm">{isRtl ? "نحن هنا" : "Get In Touch"}</span>
            <h1 className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mt-3 sm:mt-4 leading-tight ${isRtl ? "font-arabic" : ""}`}>
              {c.hero_title}
            </h1>
            <p className="text-white/50 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-xl">{c.hero_sub}</p>
          </div>
        </div>
      </section>

      {/* Office Cards with Maps */}
      <section className="section-py bg-white" dir={isRtl ? "rtl" : "ltr"}>
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Dhaka Office + Map */}
            <div className="space-y-4">
              <div className={`border border-navy-100 shadow-card p-6 sm:p-8 ${isRtl ? "text-right" : "text-left"}`}>
                <div className={`flex items-center gap-3 mb-4 sm:mb-5 w-full ${isRtl ? "flex-row-reverse justify-end text-right" : ""}`}>
                  <div className="w-9 sm:w-10 h-9 sm:h-10 bg-navy-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold-400 text-xs sm:text-sm font-bold">BD</span>
                  </div>
                  <div className={isRtl ? "text-right" : ""}>
                    <h3 className={`text-navy-800 font-semibold text-base sm:text-lg ${isRtl ? "text-right" : ""}`}>{c.dhaka_label}</h3>
                    <p className={`text-gold-500 text-[10px] sm:text-xs font-medium tracking-widest uppercase ${isRtl ? "text-right" : ""}`}>Bangladesh</p>
                  </div>
                </div>
                <div className={`space-y-2 sm:space-y-3 ${isRtl ? "text-right" : ""}`}>
                  <div className={`flex items-start gap-3 w-full ${isRtl ? "flex-row-reverse justify-end text-right" : ""}`}>
                    <Icon name="MapPin" className="w-4 sm:w-5 h-4 sm:h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <p className="text-navy-600/70 text-xs sm:text-sm leading-relaxed">{f.dhaka.address}</p>
                  </div>
                  <div className={`flex items-center gap-3 w-full ${isRtl ? "flex-row-reverse justify-end text-right" : ""}`}>
                    <Icon name="Phone" className="w-4 sm:w-5 h-4 sm:h-5 text-gold-500 flex-shrink-0" />
                    <a href="tel:+8801772909679" className="text-navy-600/70 text-xs sm:text-sm hover:text-gold-600 transition-colors text-right" dir="ltr">{f.phone}</a>
                  </div>
                  <div className={`flex items-center gap-3 w-full ${isRtl ? "flex-row-reverse justify-end text-right" : ""}`}>
                    <Icon name="Mail" className="w-4 sm:w-5 h-4 sm:h-5 text-gold-500 flex-shrink-0" />
                    <a href={`mailto:${f.email}`} className="text-navy-600/70 text-xs sm:text-sm hover:text-gold-600 transition-colors text-right" dir="ltr">{f.email}</a>
                  </div>
                </div>
              </div>
              <div className="border border-navy-100 shadow-card overflow-hidden">
                <div className="relative w-full aspect-[3/2]">
                  <iframe
                    title="Dhaka Office Google Map"
                    src="https://www.google.com/maps?q=23.7272598,90.4211957&z=15&output=embed"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Al Jubail Office + Map */}
            <div className="space-y-3 sm:space-y-4">
              <div className={`border border-navy-100 shadow-card p-6 sm:p-8 ${isRtl ? "text-right" : "text-left"}`}>
                <div className={`flex items-center gap-3 mb-4 sm:mb-5 w-full ${isRtl ? "flex-row-reverse justify-end text-right" : ""}`}>
                  <div className="w-9 sm:w-10 h-9 sm:h-10 bg-gold-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-navy-900 text-xs sm:text-sm font-bold">SA</span>
                  </div>
                  <div className={isRtl ? "text-right" : ""}>
                    <h3 className={`text-navy-800 font-semibold text-base sm:text-lg ${isRtl ? "text-right" : ""}`}>{c.jeddah_label}</h3>
                    <p className={`text-gold-500 text-[10px] sm:text-xs font-medium tracking-widest uppercase ${isRtl ? "text-right" : ""}`}>Saudi Arabia</p>
                  </div>
                </div>
                <div className={`space-y-2 sm:space-y-3 ${isRtl ? "text-right" : ""}`}>
                  <div className={`flex items-start gap-3 w-full ${isRtl ? "flex-row-reverse justify-end text-right" : ""}`}>
                    <Icon name="MapPin" className="w-4 sm:w-5 h-4 sm:h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <p className="text-navy-600/70 text-xs sm:text-sm leading-relaxed">{f.jeddah.address}</p>
                  </div>
                  <div className={`flex items-center gap-3 w-full ${isRtl ? "flex-row-reverse justify-end text-right" : ""}`}>
                    <Icon name="Phone" className="w-4 sm:w-5 h-4 sm:h-5 text-gold-500 flex-shrink-0" />
                    <span className="text-navy-600/70 text-xs sm:text-sm text-right" dir="ltr">{f.phone_jeddah}</span>
                  </div>
                  <div className={`flex items-center gap-3 w-full ${isRtl ? "flex-row-reverse justify-end text-right" : ""}`}>
                    <Icon name="Mail" className="w-4 sm:w-5 h-4 sm:h-5 text-gold-500 flex-shrink-0" />
                    <a href={`mailto:${f.email}`} className="text-navy-600/70 text-xs sm:text-sm hover:text-gold-600 transition-colors text-right" dir="ltr">{f.email}</a>
                  </div>
                </div>
              </div>
              <div className="border border-navy-100 shadow-card overflow-hidden">
                <div className="relative w-full aspect-[3/2]">
                  <iframe
                    title="Al Jubail Office Google Map"
                    src="https://www.google.com/maps?q=27.0006968,49.6532161&z=15&output=embed"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form + Quick Connect */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className={`lg:col-span-3 ${isRtl ? "text-right" : "text-left"}`}>
              <span className="gold-badge text-xs sm:text-sm">{isRtl ? "راسلنا" : "Write To Us"}</span>
              <h2 className={`section-title mt-3 sm:mt-4 mb-1 sm:mb-2 ${isRtl ? "font-arabic" : ""}`}>
                {isRtl ? "أرسل رسالتك" : "Send a Message"}
              </h2>
              <span className={isRtl ? "block w-16 h-1 bg-gold-500 mt-3 mb-6 sm:mb-8 mr-auto" : "gold-line mb-6 sm:mb-8"} />
              <ContactForm t={c} isRtl={isRtl} />
            </div>

            {/* Quick Contact */}
            <div className="lg:col-span-2">
              <div className={`bg-navy-800 p-5 sm:p-6 ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
                <h4 className="text-gold-400 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
                  {isRtl ? "تواصل سريع" : "Quick Connect"}
                </h4>
                <div className={`space-y-2 sm:space-y-3 ${isRtl ? "text-right" : ""}`}>
                  <a
                    href="https://wa.me/966562143690"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 sm:gap-3 text-white/70 hover:text-gold-400 transition-colors text-xs sm:text-sm ${isRtl ? "flex-row-reverse justify-end" : ""}`}
                  >
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span dir="ltr" className="break-all">WhatsApp: +966 56 214 3690</span>
                  </a>
                  <a href={`mailto:${f.email}`} className={`flex items-center gap-2 sm:gap-3 text-white/70 hover:text-gold-400 transition-colors text-xs sm:text-sm ${isRtl ? "flex-row-reverse justify-end" : ""}`}>
                    <Icon name="Mail" className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                    <span dir="ltr" className="break-all">{f.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
