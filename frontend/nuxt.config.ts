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
      meta: [
        {
          name: "yandex-verification",
          key: "403f1c47a04aa29f",
        },
        {
          name: "keywords",
          content:
            "Осташков, Памятники осташков, Заказать памятник в Осташкове, Селигер Камень, Памятники в Осташкове, Памятники Осташков, Сделать памятник в Осташкове, Сделать памятник",
        },
      ],
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
    routeRules: {
      "/api/directus/**": {
        // eslint-disable-next-line sonarjs/no-clear-text-protocols
        proxy: "http://seliger-kamen-directus:8055/**",
      },

      "/_nuxt/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },

      "/**/*.{png,jpg,jpeg,gif,webp}": {
        headers: {
          "Cache-Control": "public, max-age=2592000, stale-while-revalidate=86400",
        },
      },

      "/**/*.svg": {
        headers: {
          "Cache-Control": "public, max-age=86400",
        },
      },

      "/**/*.{css,js,mjs}": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },

      "/**/*.{woff,woff2,ttf,eot}": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },

      "/{favicon.ico,robots.txt,sitemap.xml}": {
        headers: {
          "Cache-Control": "public, max-age=86400",
        },
      },
    },
  },

  modules: ["@primevue/nuxt-module", "@nuxtjs/leaflet", "nuxt-vitalizer", "@nuxtjs/fontaine"],
});
