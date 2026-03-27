import { type Locale, getTranslations } from "@/lib/i18n";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import MemoriesGallery from "@/components/sections/MemoriesGallery";
import Timeline from "@/components/sections/Timeline";
import CtaStrip from "@/components/sections/CtaStrip";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: paramLocale } = await params;
  const locale = paramLocale as Locale;
  const t = await getTranslations(locale);

  return (
    <>
      <Hero locale={locale} t={t.hero} />
      <Highlights locale={locale} t={t.highlights} />
      <ServicesPreview locale={locale} t={t.services} />
      <ProjectsPreview locale={locale} t={t.projects} />
      <Timeline locale={locale} t={t.timeline} />
      <MemoriesGallery locale={locale} t={t.memories} />
      <CtaStrip locale={locale} t={t.cta_strip} />
    </>
  );
}
