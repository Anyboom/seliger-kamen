import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devServer: {
    host: "0.0.0.0",
    port: 8080,
  },

  typescript: {
    typeCheck: true,
  },

  dir: {
    layouts: "app/layouts",
    pages: "app/providers/router/routes",
    middleware: "app/providers/router/middleware",
    assets: "shared/assets",
    plugins: "app/plugins",
  },

  devtools: { enabled: true },

  imports: {
    autoImport: false,
  },

  srcDir: "./src",
  css: ["~/shared/assets/styles/index.scss"],

  watchers: {
    chokidar: {
      ignored: /node_modules/,
    },
  },

  primevue: {
    autoImport: false,
    components: {
      include: ["Image", "DynamicDialog", "Toast", "Message"],
    },
    composables: {
      include: ["useToast", "useDialog"],
    },
    options: {
      theme: {
        preset: Aura,
        options: {
          cssLayer: {
            name: "primevue",
            order: "reset, primevue",
          },
          darkModeSelector: false,
        },
      },
    },
  },

  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "preconnect",
          href: "https://directus.seliger-kamen.ru",
        },
      ],
      title: "Селигер Камень",
      charset: "utf-8",
      htmlAttrs: {
        lang: "ru",
      },
      viewport: "width=device-width, initial-scale=1",
    },
  },

  vitalizer: {
    disableStylesheets: false,
    disablePrefetchLinks: "dynamicImports",
  },

  nitro: {
    minify: true,
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
  },

  modules: [
    "@primevue/nuxt-module",
    "@nuxtjs/leaflet",
    "nuxt-vitalizer",
    "@nuxtjs/fontaine",
  ],
});