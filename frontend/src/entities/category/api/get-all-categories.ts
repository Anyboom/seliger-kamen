import { ofetch } from "ofetch";

export async function getAllCategories() {
  const { data } = await ofetch(`${import.meta.env.VITE_DIRECTUS}/items/categories`);

  return data.map((category: any) => ({ id: category.id, title: category.title }));
}
