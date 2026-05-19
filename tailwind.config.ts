import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#1E0F05',
        gray: {
          400: '#C4A86A',
          800: '#3A1F0D',
          900: '#2D1A0A',
        },
        amber: {
          500: '#D9A63E',
          neon: '#F5D64E', // neon glow CTA

        },
        orange: {
          700: '#DC4424', // terracotta
        },
        stone: {
          600: '#803014', // bronzo
        },
        white: '#FFFFFF', // testo chiaro
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        title: ['var(--font-cinzel)'],
        ui: ['var(--font-space-grotesk)'],
      },
    },
  },
  plugins: [],
};

export default config;
