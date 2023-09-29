import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://psc-landing.vercel.app',
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  output: 'static',
  adapter: vercel(),
});
