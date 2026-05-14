import { useAsyncData } from "#app";
import type { MenuItem } from "~/entities/menu";

export async function getMenu() {
  return useAsyncData<{ data: MenuItem[] }>("menu", () => $fetch(`/api/directus/items/menu`));
}
