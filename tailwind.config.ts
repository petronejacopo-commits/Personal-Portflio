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
        black: '#0D0D0D',
        gray: {
          400: '#A09888',
          800: '#262626',
          900: '#1A1A1A',
        },
        amber: {
          500: '#D4A843', // accento primario
        },
        orange: {
          700: '#B87351', // terracotta
        },
        stone: {
          600: '#8B6B4A', // bronzo
        },
        white: '#F5F0E8', // testo chiaro
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
