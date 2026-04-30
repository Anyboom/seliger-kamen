import MainView from "@/pages/MainView.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import { RouteNames } from "@/app/router/route-names.ts";
import { Layouts } from "@/app/layouts/layouts.ts";
import { loadLayout } from "@/app/router/middleware/load-layout.ts";

const routes = [
  {
    path: "/",
    component: MainView,
    name: RouteNames.index,
    meta: {
      layout: Layouts.main,
    },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes: routes,
});

router.beforeEach(loadLayout);

export { router };
