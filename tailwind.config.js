/**
 * @format
 * @type {import('tailwindcss').Config}
 */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontSize: {
                home1: "110px",
                 home2: "80px",
                title2: "70px",
                title: "40px",
                subtitle: "30px",
                content: "24px",
                content2: "18px",
                h1Login: "27px",
                p404: "19px",
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
});
