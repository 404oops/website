import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s cubic-bezier(0.5, 0, 0, 1) forwards",
      },
      transitionTimingFunction: {
        "custom-bezier": "cubic-bezier(0.5, 0, 0, 1)",
      },
      backdropBlur: {
        custom: "30px",
      },
    },
  },
  plugins: [],
} satisfies Config;
