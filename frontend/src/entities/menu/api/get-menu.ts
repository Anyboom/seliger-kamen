import type { MenuItem } from "~/entities/menu/model/menu-item";
import { pathDirectus } from "~/shared/api/path-directus";

export async function getMenu(): Promise<MenuItem[]> {
  const { data } = await $fetch<any>(`${pathDirectus()}/items/menu`);

  return data.map((item: any) => ({
    id: item.id,
    title: item.title,
    href: item.href,
  }));
}
