import { pathDirectus } from "~/shared/api/path-directus";

export async function getAllCategories() {
  const { data } = await $fetch<any>(`${pathDirectus()}/items/categories`);

  return data.map((category: any) => ({ id: category.id, title: category.title }));
}
