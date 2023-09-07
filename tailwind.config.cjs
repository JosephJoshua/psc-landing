const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Encode Sans Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      textColor: {
        default: 'var(--color-text)',
        offset: 'var(--color-text-offset)',
        light: 'var(--color-text-light)',
      },
      backgroundColor: {
        default: 'var(--color-background)',
        offset: 'var(--color-background-offset)',
      },
      borderColor: {
        default: 'var(--color-border)',
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require('tailwindcss-fluid-type')],
};
