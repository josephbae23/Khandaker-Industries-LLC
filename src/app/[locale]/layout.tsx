import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale, getDir, getTranslations } from "@/lib/i18n";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: paramLocale } = await params;
  const isAr = paramLocale === "ar";
  return {
    title: isAr
      ? "خنداكر إندستريز كومباني | توريد العمالة والتأشيرات والسفر"
      : "Khandaker Industries Company | Manpower, Visa & Travel Solutions",
    description: isAr
      ? "شركة رائدة في توريد العمالة ومعالجة التأشيرات وحلول السفر بين بنغلاديش والمملكة العربية السعودية"
      : "Premier manpower supply, visa processing and travel solutions connecting Bangladesh and Saudi Arabia since 2007.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: paramLocale } = await params;
  const locale = paramLocale as Locale;
  if (!locales.includes(locale)) notFound();

  const dir = getDir(locale);
  const t = await getTranslations(locale);

  return (
    <html lang={locale} dir={dir} data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Cairo:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`bg-white text-navy-800 antialiased ${
          locale === "ar" ? "font-arabic" : "font-body"
        }`}
      >
        <Navbar locale={locale} t={t.nav} />
        <main>{children}</main>
        <Footer locale={locale} t={t.footer} />
      </body>
    </html>
  );
}
