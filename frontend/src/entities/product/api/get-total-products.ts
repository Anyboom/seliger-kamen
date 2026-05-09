import { pathDirectus } from "~/shared/api/path-directus";
import { type MaybeRefOrGetter, toValue } from "vue";
import { useAsyncData } from "#app";

export async function getTotalProducts(params: MaybeRefOrGetter<object> = {}) {
  return useAsyncData<{ data: { count: number }[] }>(
    ["total-products", JSON.stringify(toValue(params))].join("-"),
    () => $fetch(`${pathDirectus()}/items/products`, { query: { "aggregate[count]": "*", ...toValue(params) } }),
    { watch: [params], lazy: true },
  );
}
