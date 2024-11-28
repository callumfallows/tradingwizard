import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://tradingwizard.vercel.app/',
  output: 'server',
  adapter: vercelServerless({
    imageService: true,
  }),
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
