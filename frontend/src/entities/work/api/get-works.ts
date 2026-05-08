import { ofetch } from "ofetch";
import type { Work } from "@/entities/work/model/work.ts";

export async function getWorks(params?: Record<any, any>): Promise<Work[]> {
  const { data } = await ofetch(`${import.meta.env.VITE_DIRECTUS}/items/works`, { query: { ...params } });

  return data.map((work: any) => ({ id: work.id, image: work.image, title: work.title }));
}
