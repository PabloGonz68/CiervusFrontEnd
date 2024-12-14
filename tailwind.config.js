/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontSize: {
                title: "40px",
                content: "24px",
                h1Login: "27px",
                pLogin: "16px",
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
