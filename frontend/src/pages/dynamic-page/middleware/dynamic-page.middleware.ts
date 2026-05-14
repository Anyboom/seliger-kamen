import { defineNuxtRouteMiddleware } from "#app";
import { useAsyncData } from "#app";

export default defineNuxtRouteMiddleware(async (to) => {
  try {
    const { data } = await useAsyncData("users", () => $fetch(`/api/directus/resolve-route${to.path}`));

    to.meta.currentPage = data;
  } catch (error) {
    console.error("Не получилось выполнить запрос:", error);
  }
});
