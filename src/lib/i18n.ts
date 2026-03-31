export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDir(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export async function getTranslations(locale: string) {
  const safeLocale = isValidLocale(locale) ? locale : defaultLocale;
  const messages = await import(`@/messages/${safeLocale}.json`);
  return messages.default;
}
