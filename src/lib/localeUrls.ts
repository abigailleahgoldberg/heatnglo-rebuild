// Locale URL helpers for the 4-locale tree (per Phase 1 handoff §5).
//
//   en      → /          (default, no prefix)
//   es      → /es/...    (Spanish-US, USD)
//   en-ca   → /en-ca/... (English Canada, CAD)
//   fr-ca   → /fr-ca/... (French Canada, CAD)

export const LOCALES = ['en', 'es', 'en-ca', 'fr-ca'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_PREFIX: Record<Locale, string> = {
  en:      '',
  es:      '/es',
  'en-ca': '/en-ca',
  'fr-ca': '/fr-ca',
};

export const LOCALE_HREFLANG: Record<Locale, string> = {
  en:      'en-US',
  es:      'es-US',
  'en-ca': 'en-CA',
  'fr-ca': 'fr-CA',
};

export const LOCALE_CURRENCY: Record<Locale, 'USD' | 'CAD'> = {
  en:      'USD',
  es:      'USD',
  'en-ca': 'CAD',
  'fr-ca': 'CAD',
};

export const LOCALE_FLAG: Record<Locale, string> = {
  en:      '🇺🇸',
  es:      '🇺🇸',
  'en-ca': '🇨🇦',
  'fr-ca': '🇨🇦',
};

export const LOCALE_LABEL: Record<Locale, string> = {
  en:      'English',
  es:      'Español',
  'en-ca': 'English',
  'fr-ca': 'Français',
};

export function stripLocalePrefix(pathname: string): string {
  for (const loc of LOCALES) {
    const prefix = LOCALE_PREFIX[loc];
    if (!prefix) continue;
    if (pathname === prefix) return '/';
    if (pathname.startsWith(prefix + '/')) return pathname.slice(prefix.length);
  }
  return pathname;
}

export function detectLocale(pathname: string): Locale {
  if (pathname.startsWith('/fr-ca/') || pathname === '/fr-ca') return 'fr-ca';
  if (pathname.startsWith('/en-ca/') || pathname === '/en-ca') return 'en-ca';
  if (pathname.startsWith('/es/')    || pathname === '/es')    return 'es';
  return 'en';
}

export function localeUrl(locale: Locale, basePath: string): string {
  const stripped = stripLocalePrefix(basePath);
  const prefix = LOCALE_PREFIX[locale];
  if (!prefix) return stripped;
  return prefix + (stripped === '/' ? '/' : stripped);
}

export function allLocaleAlternates(basePath: string): Array<{ locale: Locale; hreflang: string; href: string }> {
  const stripped = stripLocalePrefix(basePath);
  return LOCALES.map((loc) => ({
    locale: loc,
    hreflang: LOCALE_HREFLANG[loc],
    href: 'https://heatnglo.com' + localeUrl(loc, stripped),
  }));
}
