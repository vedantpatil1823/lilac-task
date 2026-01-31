import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'maya-bg': '#F9F7F2',
                'maya-sage': '#2F3E36',
                'maya-earth': '#A47148',
            },
            fontFamily: {
                serif: ['var(--font-playfair)'],
                sans: ['var(--font-inter)'],
            },
        },
    },
    plugins: [],
};
export default config;