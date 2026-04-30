import { createApp } from "vue";
import App from "@/app/entrypoint/App.vue";
import { router } from "@/app/router/router.ts";
import "@/shared/styles/index.scss";

const app = createApp(App);

app.use(router);

export { app };
