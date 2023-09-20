/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      xs: ["12px", "18px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["18px", "24px"],
      xl: ["20px", "26px"],
      "2xl": ["24px", "32px"],
      "3xl": ["28px", "36px"],
      "4xl": ["36px", "48px"],
      "5xl": ["48px", "1"],
      "6xl": ["60px", "1"],
      "7xl": ["72px", "1"],
      "8xl": ["80px", "1"],
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "2px",
      1: "4px",
      1.5: "6px",
      2: "8px",
      2.5: "10px",
      3: "12px",
      3.5: "14px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      14: "56px",
      15: "60px",
      16: "64px",
      20: "80px",
      23: "92px",
      24: "96px",
      25: "100px",
      28: "112px",
      28.5: "114px",
      32: "128px",
      35: "140px",
      36: "144px",
      40: "160px",
      44: "176px",
      48: "192px",
      52: "208px",
      56: "224px",
      60: "240px",
      64: "256px",
      72: "288px",
      80: "320px",
      90: "360px",
      96: "384px",
      135: "540px",
      168: "672px",
      215: "860px",
    },
    colors: {
      ...defaultTheme.colors,
      semantics: {
        default: "#CC3648",
      },
      tertiary: {
        40: "#F16037",
      },
      grayscale: {
        10: "#141515",
        20: "#2A2B2B",
        30: "#444545",
        40: "#6E7171",
        50: "#848687",
        60: "#A2A3A3",
        70: "#B7B7B7",
        80: "#D6D6D6",
        90: "#E3E3E3",
        95: "#F5F5F5",
        100: "#FFFFFF",
      },
      primary: {
        30: "#005824",
        40: "#14842F",
        50: "#25AF50",
        60: "#4FBA69",
        90: "#E1F2E5",
        default: "#4FBA69",
      },
    },
    extend: {},
  },
  plugins: [],
};
