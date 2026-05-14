import { useAsyncData } from "#app";
import type { PlaceShop } from "~/entities/place-shop";

export async function getPlaceShops() {
  return useAsyncData<{ data: PlaceShop[] }>("place-shop", () => $fetch(`/api/directus/items/place_shop`));
}
