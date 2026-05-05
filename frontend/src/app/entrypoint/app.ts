import { createApp } from "vue";
import App from "@/app/entrypoint/App.vue";
import { router } from "@/app/router/router.ts";
import "@/shared/assets/styles/index.scss";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(router);

export { app };
