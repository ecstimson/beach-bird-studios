// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://beachbirdstudios.com',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(), 
    sitemap({
      filter: (page) => !page.includes('/draft/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  build: {
    inlineStylesheets: 'auto',
    // Split JavaScript bundles for better caching
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[hash][extname]',
        chunkFileNames: 'chunks/[hash].js',
        entryFileNames: 'entries/[hash].js',
      },
    },
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            // Group vendor libraries
            'vendor': ['astro:content'],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['lucide'],
    },
  },
  image: {
    // Use the built-in sharp service for image optimization
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  compressHTML: true,
  scopedStyleStrategy: 'attribute',
});