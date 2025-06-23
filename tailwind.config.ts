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
        "col1": "#5ebff0",
        "col2": "#e6eb2e",
        "col3": "#12429B",
        "white1": "#fdfdfd",
        "neutral": "#f4ffff",
        "base-100": "#ffffff",
        "info": "#41ffff",
        "success": "#9affdc",
        "warning": "#fff129",
        "error": "#ffbab9",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "aqua", "nord"],
  },
} satisfies Config;
