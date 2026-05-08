import { pathDirectus } from "~/shared/api/path-directus";
import { useAsyncData } from "#app";
import type { PlaceShop } from "~/entities/place-shop";

export async function getPlaceShops() {
  return useAsyncData<{ data: PlaceShop[] }>("place-shop", () => $fetch(`${pathDirectus()}/items/place_shop`));
}
