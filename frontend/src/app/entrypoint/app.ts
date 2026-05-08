import { createApp } from "vue";
import App from "@/app/entrypoint/App.vue";
import { router } from "@/app/router/router.ts";
import "@/shared/assets/styles/index.scss";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { createHead } from "@unhead/vue/client";
import { DialogService, ToastService } from "primevue";

const app = createApp(App);

app.use(PrimeVue, {
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
});

app.use(DialogService);
app.use(ToastService);

const head = createHead();

app.use(head);

app.use(router);

export { app };
