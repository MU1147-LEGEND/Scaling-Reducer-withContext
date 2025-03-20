/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                grow: {
                    "0%": { transform: "scale(0.5)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
            },
            animation: {
                grow: "grow 0.5s ease-in-out forwards",
            },
        },
    },
    plugins: [],
};
