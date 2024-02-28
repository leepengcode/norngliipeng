/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./App.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          650: " #12f7ff",
        },
      },
    },
  },
  plugins: [],
};
