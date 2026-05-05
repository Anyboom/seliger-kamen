import { ofetch } from "ofetch";
import type { RouteLocationNormalized } from "vue-router";

export async function loadPage(route: RouteLocationNormalized): Promise<void> {
  try {
    route.meta.currentPage = await ofetch(`${import.meta.env.VITE_DIRECTUS}/resolve-route${route.path}`);
  } catch (error) {
    console.error("Не получилось выполнить запрос:", error);
  }
}
