import { createRouter, createWebHistory } from "vue-router";
import { Layouts } from "@/app/layouts/layouts.ts";
import { loadLayout } from "@/app/router/middleware/load-layout.ts";
import { loadPage } from "@/app/router/middleware/load-page.ts";
import { DynamicPage } from "@/pages/dynamic-page";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    component: DynamicPage,
    name: "dynamic-page",
    meta: {
      layout: Layouts.main,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach(loadPage);
router.beforeEach(loadLayout);

export { router };
