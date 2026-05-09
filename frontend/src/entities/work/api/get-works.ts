import type { Work } from "~/entities/work/model/work";
import { pathDirectus } from "~/shared/api/path-directus";
import { useAsyncData } from "#app";

export async function getWorks(params?: Record<any, any>) {
  return useAsyncData<{ data: Work[] }>(["work", JSON.stringify(params)].join("-"), () =>
    $fetch(`${pathDirectus()}/items/works`, { query: { ...params } }),
  );
}
