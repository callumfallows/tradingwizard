import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
// https://astro.build/config
// export default defineConfig({
//   site: 'https://tradingwizard.vercel.app/',
//   integrations: [tailwind(), mdx(), sitemap(), icon()],
//   output: 'hybrid',
// });

export default defineConfig({
  output: 'hybrid',
  site: 'https://tradingwizard.vercel.app/',
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  adapter: vercel(),
});
