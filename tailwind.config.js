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
            fontFamily: {
                sans: ["JetBrains Mono", "sans-serif"],
            },
        },
        colors: {
            pageBg: "#18171F",
            componentBg: "#24232C",
            headingColor: "817D92",
            textColor: "#E6E5EA",
            customGreen: "#A4FFAF",
            customRed: "F64A4A",
            customAmber: "FB7C58",
            customYellow: "F8CD65",
        },
    },
};
