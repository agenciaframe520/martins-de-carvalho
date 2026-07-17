import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://www.martinsdecarvalho.com.br';

export default defineConfig({
  site: SITE,
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'de', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        quality: 60,
      },
    },
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        // Skip the post-form thank-you pages only.
        if (/\/(obrigado|danke|thank-you|gracias)\/?$/.test(path)) return false;
        return true;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});