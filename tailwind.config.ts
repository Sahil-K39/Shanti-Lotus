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
        ink: "#271e16",
        cacaoProfundo: "#3A2A20",
        terracotta: "#B1684B",
        sand: "#E3CBA8",
        parchment: "#F4E9D8",
        lightGold: "#D4A373",
        lotusPink: "#D5A795",
        sage: "#6F8F7A",
        emerald: "#5E9E9B",
        antiqueGold: "#C8A96B",
        surface: "#3A2A20",
        textDark: "#F4E9D8",
        muted: "#B1684B",
        accent: "#D4A373",
        surfaceDark: "#271e16",
        warmCream: "#F4E9D8",
        blancoRitual: "#F4E9D8",
        arenaSagrada: "#E3CBA8",
        nudeRitual: "#D5A795",
        lotusGreen: "#6F8F7A",
        sacredTurquoise: "#5E9E9B",
        deepBlue: "#4D667D",
        ivory: "#F4E9D8",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body: ['"Montserrat"', "sans-serif"],
      },
      borderRadius: {
        soft: "40px",
        pill: "100px",
      },
      boxShadow: {
        breathe: "0 20px 40px rgba(74, 63, 53, 0.03)",
        altar: "inset 0 8px 32px rgba(0,0,0,0.6), 0 16px 48px rgba(0,0,0,0.4)",
        glow: "0 0 60px rgba(200, 169, 126, 0.15)",
      },
      transitionTimingFunction: {
        slow: "cubic-bezier(0.4, 0, 0.2, 1)",
        breath: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      transitionDuration: {
        "1200": "1200ms",
        "1500": "1500ms",
        "2000": "2000ms",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        breathe: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.05)", opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        petalFall: {
          "0%": { transform: "translateY(-10%) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(110vh) rotate(720deg)", opacity: "0" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        float: "float 6s ease-in-out infinite",
        breathe: "breathe 8s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate",
        shimmer: "shimmer 3s linear infinite",
        petalFall: "petalFall 15s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
