import { pathDirectus } from "~/shared/api/path-directus";
import { useAsyncData } from "#app";
import type { Category } from "~/entities/category";

export async function getAllCategories() {
  return useAsyncData<{ data: Category[] }>("categories", () => $fetch(`${pathDirectus()}/items/categories`));
}
