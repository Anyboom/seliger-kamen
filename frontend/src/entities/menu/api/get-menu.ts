import { pathDirectus } from "~/shared/api/path-directus";
import { useAsyncData } from "#app";
import type { MenuItem } from "~/entities/menu";

export async function getMenu() {
  return useAsyncData<{ data: MenuItem[] }>("menu", () => $fetch(`${pathDirectus()}/items/menu`));
}
