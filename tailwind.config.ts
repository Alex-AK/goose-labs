import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#1c1917',
            a: {
              color: '#f97316',
              '&:hover': {
                color: '#ea580c',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
