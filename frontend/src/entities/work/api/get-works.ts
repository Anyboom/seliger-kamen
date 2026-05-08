import type { Work } from "~/entities/work/model/work";
import { pathDirectus } from "~/shared/api/path-directus";

export async function getWorks(params?: Record<any, any>): Promise<Work[]> {
  const { data } = await $fetch<any>(`${pathDirectus()}/items/works`, { query: { ...params } });

  return data.map((work: any) => ({ id: work.id, image: work.image, title: work.title }));
}
