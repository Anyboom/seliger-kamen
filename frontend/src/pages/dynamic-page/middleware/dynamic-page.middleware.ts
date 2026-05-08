import { defineNuxtRouteMiddleware } from "#app";
import { useAsyncData } from "#app";
import { pathDirectus } from "~/shared/api/path-directus";

export default defineNuxtRouteMiddleware(async (to) => {
  try {
    console.log(`${pathDirectus()}/resolve-route${to.path}`);
    const { data } = await useAsyncData("users", () => $fetch(`${pathDirectus()}/resolve-route${to.path}`));

    to.meta.currentPage = data;
  } catch (error) {
    console.error("Не получилось выполнить запрос:", error);
  }
});
