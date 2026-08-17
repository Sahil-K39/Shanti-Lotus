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
        oroDivino: "#C8A96B",
        oroRitual: "#B8904F",
        oroClaro: "#E2C5BF",
        arenaSagrada: "#EFE6DB",
        nudeRitual: "#D8C8B6",
        cacaoProfundo: "#5A4636",
        verdeLoto: "#6F8F7A",
        turquesaSagrado: "#5E9E9B",
        azulProfundo: "#4D667D",
        // Semantic aliases based on the brand kit
        ink: "#5A4636", // Cacao Profundo as darkest text
        parchment: "#EFE6DB", // Arena Sagrada as light background
        charcoal: "#4D667D", // Azul profundo
        terracotta: "#B8904F", // Oro Ritual
        lightGold: "#C8A96B", // Oro Divino
        surface: "#EFE6DB",
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
