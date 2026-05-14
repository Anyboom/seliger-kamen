import { useAsyncData } from "#app";
import type { Category } from "~/entities/category";

export async function getAllCategories() {
  return useAsyncData<{ data: Category[] }>("categories", () => $fetch(`/api/directus/items/categories`));
}
