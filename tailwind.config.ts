import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-sans)", "sans-serif"],
        body: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        bg: "#0A0A0A",
        surface: "#141414",
        edge: "#262626",
        fg: "#F5F0EB",
        muted: "#9A9590",
        accent: "#FFFFFF",
        "accent-dim": "#E5E0DA",
      },
    },
  },
  plugins: [],
};
export default config;
