import type { Work } from "~/entities/work/model/work";
import { pathDirectus } from "~/shared/api/path-directus";
import { useAsyncData } from "#app";
import { type MaybeRefOrGetter, toValue } from "vue";

export async function getWorks(params: MaybeRefOrGetter<object>) {
  return useAsyncData<{ data: Work[] }>(
    ["works", JSON.stringify(toValue(params))].join("-"),
    () => $fetch(`${pathDirectus()}/items/works`, { query: { ...toValue(params) } }),
    { watch: [params] },
  );
}
