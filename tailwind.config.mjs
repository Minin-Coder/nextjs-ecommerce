/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./assets/styles/globals.css",
  ],
  safelist: [
    'wrapper', 'flex-between', 'flex-start', 'flex-center',
    'h1-bold', 'h2-bold', 'h3-bold', 'lg:mx-auto', 'p-5', 'md:px-10',
    'w-full', 'max-w-7xl', 'flex', 'justify-between', 'justify-start',
    'justify-center', 'items-center', 'font-bold', 'text-2xl', 'text-3xl', 'text-4xl',
  ],
  theme: { extend: {} },
  plugins: [],
};
export default config;
