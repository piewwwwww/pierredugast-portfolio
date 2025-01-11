// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';// https://astro.build/config
export default defineConfig({
    server: {
      host: '0.0.0.0'
    },
    site: 'https://pierredugast.com',
    integrations: [sitemap()],
  });

