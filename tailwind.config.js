/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "primary-black": "#222222",
                "secondary-blue": "#004CCC",
                "active-color": "#DDE7F8",
                "completed-color": "#24753A",
                "ongoing-color": "#FFA620",
                "primary-blue": "#0D0630",
                "primary-gray": "#959595",
            },

            fontFamily: {
                primary: "var(--primary)",
                heading: "var(--heading)",
            },
        },
    },
    plugins: [],
};
