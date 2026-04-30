import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-black':  'var(--brand-black)',
        'brand-white':  'var(--brand-white)',
        'orange-1':     'var(--orange-1)',
        'orange-2':     'var(--orange-2)',
        'orange-3':     'var(--orange-3)',
        'gray-100':     'var(--gray-100)',
        'gray-300':     'var(--gray-300)',
        'gray-500':     'var(--gray-500)',
        'gray-700':     'var(--gray-700)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body:    'var(--font-body)',
      },
      maxWidth: {
        'page': '1280px',
      },
    },
  },
  plugins: [],
} satisfies Config;
