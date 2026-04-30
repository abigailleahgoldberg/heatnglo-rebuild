// Translation loader scaffold — Phase 5 wires this into content.config.ts.
//
// Strategy:
//   • Read base-locale (en) Markdown files
//   • For each non-en locale, check for an existing translation file
//   • If a `_locked` flag is present in the translation's frontmatter, skip
//   • Otherwise, hash the source body; if hash differs from cached translation,
//     call the configured provider (Anthropic / DeepL / Google Translate) and
//     write the new translation to disk
//
// Provider selection per Phase 1 handoff §5; for Heat & Glo: Anthropic preferred.

import { createHash } from 'node:crypto';

export interface TranslateOptions {
  sourceLocale: string;
  targetLocale: string;
  provider: 'anthropic' | 'deepl' | 'google';
}

export function hashContent(text: string): string {
  return createHash('sha256').update(text).digest('hex').slice(0, 16);
}

export async function translateString(
  _text: string,
  _opts: TranslateOptions,
): Promise<string> {
  // Phase 5 implementation goes here.
  throw new Error('translate-loader: not yet wired (Phase 5)');
}
