import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:         'var(--ink)',
        'ink-2':     'var(--ink-2)',
        steel:       'var(--steel)',
        'steel-2':   'var(--steel-2)',
        rule:        'var(--rule)',
        'rule-2':    'var(--rule-2)',
        paper:       'var(--paper)',
        bone:        'var(--bone)',
        orange:      'var(--orange)',
        'orange-2':  'var(--orange-2)',
        'orange-3':  'var(--orange-3)',
        'orange-soft': 'var(--orange-soft)',
      },
      fontFamily: {
        display: 'var(--display)',
        body:    'var(--body)',
      },
      maxWidth: {
        page: '1280px',
      },
    },
  },
  plugins: [],
} satisfies Config;
