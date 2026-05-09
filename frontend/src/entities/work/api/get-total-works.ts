import { pathDirectus } from "~/shared/api/path-directus";
import { type MaybeRefOrGetter, toValue } from "vue";
import { useAsyncData } from "#app";

export async function getTotalWorks(params: MaybeRefOrGetter<object> = {}) {
  return useAsyncData<{ data: { count: number }[] }>(
    ["total-works", JSON.stringify(toValue(params))].join("-"),
    () => $fetch(`${pathDirectus()}/items/works`, { query: { "aggregate[count]": "*", ...toValue(params) } }),
    { watch: [params], lazy: true },
  );
}
