import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import { defineConfig } from 'astro/config';
import vercelServerless from '@astrojs/vercel/serverless';
// https://astro.build/config
export default defineConfig({
  site: 'https://tradingwizard.vercel.app/',
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  output: 'server',
  security: {
    checkOrigin: false,
  },
  adapter: vercelServerless({
    imageService: true,
  }),
});
