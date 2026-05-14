import { useAsyncData } from "#app";
import type { Global } from "~/entities/globals";

export async function getGlobals() {
  return useAsyncData<{ data: Global }>("globals", () => $fetch(`/api/directus/items/globals`));
}
