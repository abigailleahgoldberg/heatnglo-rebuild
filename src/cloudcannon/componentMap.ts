// Single source of truth mapping content-collection `_type` keys to their
// Astro block components. Phase 6 reads this for editable-regions
// component registration in the Visual Editor iframe.

import HeroBlock           from '@components/blocks/HeroBlock.astro';
import TrustStripBlock     from '@components/blocks/TrustStripBlock.astro';
import LoveYourFireplaceBlock from '@components/blocks/LoveYourFireplaceBlock.astro';
import BrowseLineupBlock   from '@components/blocks/BrowseLineupBlock.astro';
import ProAdvantageBlock   from '@components/blocks/ProAdvantageBlock.astro';
import TVWallsBlock        from '@components/blocks/TVWallsBlock.astro';
import PressStripBlock     from '@components/blocks/PressStripBlock.astro';
import FaqBlock            from '@components/blocks/FaqBlock.astro';
import QuoteBlock          from '@components/blocks/QuoteBlock.astro';

export const componentMap: Record<string, unknown> = {
  hero_block:                HeroBlock,
  trust_strip_block:         TrustStripBlock,
  love_your_fireplace_block: LoveYourFireplaceBlock,
  browse_lineup_block:       BrowseLineupBlock,
  proadvantage_block:        ProAdvantageBlock,
  tv_walls_block:            TVWallsBlock,
  press_strip_block:         PressStripBlock,
  faq_block:                 FaqBlock,
  quote_block:               QuoteBlock,
};
