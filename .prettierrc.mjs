/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  singleQuote: true,
  endOfLine: 'lf',
  printWidth: 100,
  semi: true,
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss', // MUST come last
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

export default config;
