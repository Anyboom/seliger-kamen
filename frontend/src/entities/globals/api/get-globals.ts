import { useRuntimeConfig } from "#app";
import { pathDirectus } from "~/shared/api/path-directus";

export async function getGlobals() {
  const { data } = await $fetch<any>(`${pathDirectus()}/items/globals`);

  return {
    id: data.id,
    email: data.email,
  };
}
