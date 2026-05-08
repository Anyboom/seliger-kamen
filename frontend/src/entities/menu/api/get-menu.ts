import { ofetch } from "ofetch";
import type { MenuItem } from "@/entities/menu/model/menu-item.ts";

export async function getMenu(): Promise<MenuItem[]> {
  const { data } = await ofetch(`${import.meta.env.VITE_DIRECTUS}/items/menu`);

  return data.map((item: any) => ({
    id: item.id,
    title: item.title,
    href: item.href,
  }));
}
