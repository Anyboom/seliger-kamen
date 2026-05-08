import { pathDirectus } from "~/shared/api/path-directus";

export async function getPlaceShops() {
  const { data } = await $fetch<any>(`${pathDirectus()}/items/place_shop`);

  return data.map((place: any) => ({
    id: place.id,
    latitude: place.latitude,
    longitude: place.longitude,
    address: place.address,
    phone: place.phone,
    socials: place.socials,
  }));
}
