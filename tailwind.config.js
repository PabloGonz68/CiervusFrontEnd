/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontSize: {
                home1: "60px",
                title: "40px",
                content: "24px",
                content2: "18px",
                h1Login: "27px",
                pLogin: "16px",
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
            colors: {
                primary: "#3C5336",
                secondary: "#B9DAB0",
                sub: "#D4D4D4",
            },
        },
    },
    plugins: [],
};
