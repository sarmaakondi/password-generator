/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/styles/globals.css",
    ],
    plugins: [],
    theme: {
        extend: {
            fontFamily: ["JetBrains Mono", "sans-serif"],
        },
    },
};
