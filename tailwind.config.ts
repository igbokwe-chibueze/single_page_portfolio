import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily : {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'move-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'move-right': {
          '0%': { transform: 'translateX(-50)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'ping-large': "ping-large 1s ease-in-out infinite",
        wiggle: 'wiggle 1s ease-in-out infinite',
        'move-left': 'move-left 1s linear infinite',
        'move-right': 'move-right 1s linear infinite',
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".mask-image-gradient-vertical": {
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        },
        ".mask-image-gradient-horizontal": {
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        },
        ".mask-image-radial-gradient": {
          maskImage: "radial-gradient(ellipse at bottom center, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse at bottom center, black, transparent)",
        },
      });
    }),
  ],
};
export default config;
