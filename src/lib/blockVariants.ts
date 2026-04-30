// Block Delivery Standard helpers (Phase 4 §7c).
// Every block uses these to map editor-selectable variant props
// onto the section/btn utility classes defined in src/styles/global.css.

export type BgVariant       = 'paper' | 'cream' | 'ink' | 'brand';
export type Alignment       = 'left' | 'center';
export type Density         = 'compact' | 'default' | 'roomy';
export type BtnVariant      = 'orange' | 'orange-outline' | 'ink' | 'ghost';

interface SectionVariants {
  bg_variant?: BgVariant;
  alignment?: Alignment;
  density?: Density;
  hidden_on_mobile?: boolean;
}

export function sectionClasses(v: SectionVariants, baseClass: string): string {
  const out = ['section', baseClass];
  if (v.bg_variant)        out.push(`section--bg-${v.bg_variant}`);
  if (v.alignment)         out.push(`section--align-${v.alignment}`);
  if (v.density)           out.push(`section--density-${v.density}`);
  if (v.hidden_on_mobile)  out.push('section--hidden-mobile');
  return out.join(' ');
}

export function btnClasses(variant: BtnVariant | undefined, fallback: BtnVariant = 'orange'): string {
  return `btn btn--${variant ?? fallback}`;
}
