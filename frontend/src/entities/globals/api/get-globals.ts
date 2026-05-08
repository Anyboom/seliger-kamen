import { useAsyncData } from "#app";
import { pathDirectus } from "~/shared/api/path-directus";
import type { Global } from "~/entities/globals";

export async function getGlobals() {
  return useAsyncData<{ data: Global }>("globals", () => $fetch(`${pathDirectus()}/items/globals`));
}
