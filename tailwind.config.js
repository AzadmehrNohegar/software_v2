/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        xTheme: {
          primary: "#d12e36",
          "primary-focus": "#922026",
          "primary-content": "#F7F7F8",
          secondary: "#004bcc",
          "secondary-focus": "#002f80",
          "secondary-content": "#F7F7F8",
          accent: "#f2f2f2",
          "accent-focus": "#808080",
          "accent-content": "#60626C",
          info: "#0073ff",
          "info-content": "#0050b3",
          success: "#43d691",
          "success-content": "#F7F7F8",
          warning: "#ffcc33",
          "warning-content": "#F7F7F8",
          error: "#e61920",
          "error-content": "#F7F7F8",
          "base-100": "#ffffff",
          "base-content": "#262626",
        },
      },
    ],
  },
};
