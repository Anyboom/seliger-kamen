import { pathDirectus } from "~/shared/api/path-directus";
import { useAsyncData } from "#app";
import type { Product } from "~/entities/product";
import { type MaybeRefOrGetter, toValue } from "vue";

export async function getProducts(params: MaybeRefOrGetter<object>) {
  return useAsyncData<{ data: Product[] }>(
    ["products", JSON.stringify(toValue(params))].join("-"),
    () => $fetch(`${pathDirectus()}/items/products?fields=*.*`, { query: { ...toValue(params) } }),
    { watch: [params] },
  );
}
