import { ofetch } from "ofetch";

export async function getPlaceShops() {
  const { data } = await ofetch(`${import.meta.env.VITE_DIRECTUS}/items/place_shop`);

  return data.map((place: any) => ({
    id: place.id,
    latitude: place.latitude,
    longitude: place.longitude,
    address: place.address,
    phone: place.phone,
    socials: place.socials,
  }));
}
