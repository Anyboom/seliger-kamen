import { createApp } from "vue";
import App from "@/app/entrypoint/App.vue";
import { router } from "@/app/router/router.ts";
import "@/shared/assets/styles/index.scss";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { createHead } from "@unhead/vue/client";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false,
    },
  },
});

const head = createHead();

app.use(head);

app.use(router);

export { app };
