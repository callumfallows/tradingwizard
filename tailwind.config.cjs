/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#11536F',
        'primary-light': '#2B6191',
        'title-alt': '#515151',
        subtitle: '#429CD2',
      },
      fontFamily: {
        sans: ['Mulish Variable', ...defaultTheme.fontFamily.sans],
        background: {
          hero: "url('/assets/hero-bg.jpg')",
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
