import MainView from "@/pages/MainView.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [{ path: "/", component: MainView }];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
