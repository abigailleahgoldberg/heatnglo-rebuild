// Locale helpers used by ContentBlocks.astro to localize hrefs
// before passing block props down into block components.
// Block components themselves never read Astro.url — see Phase 4 §7b.

import { LOCALES, type Locale, detectLocale, LOCALE_PREFIX } from './localeUrls';

export { LOCALES, type Locale, detectLocale };

export function getLocale(pathname: string | undefined | null): Locale {
  if (!pathname) return 'en';
  return detectLocale(pathname);
}

export function localizedHref(href: string | undefined | null, locale: Locale): string {
  if (!href) return '';
  if (!href.startsWith('/')) return href;
  if (locale === 'en') return href;

  const prefix = LOCALE_PREFIX[locale];
  for (const loc of LOCALES) {
    const p = LOCALE_PREFIX[loc];
    if (!p) continue;
    if (href === p || href.startsWith(p + '/')) {
      return href;
    }
  }
  return prefix + href;
}

const HREF_KEY_RE = /_href$|_url$|^href$|^url$/;

export function localizeBlockHrefs<T extends Record<string, unknown>>(block: T, locale: Locale): T {
  const out: Record<string, unknown> = { ...block };
  for (const key of Object.keys(out)) {
    const value = out[key];
    if (typeof value === 'string' && HREF_KEY_RE.test(key)) {
      out[key] = localizedHref(value, locale);
    } else if (Array.isArray(value)) {
      out[key] = value.map((item) =>
        typeof item === 'object' && item !== null
          ? localizeBlockHrefs(item as Record<string, unknown>, locale)
          : item
      );
    }
  }
  return out as T;
}
