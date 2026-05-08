import { ofetch } from "ofetch";

export async function getGlobals() {
  const { data } = await ofetch(`${import.meta.env.VITE_DIRECTUS}/items/globals`);

  return {
    id: data.id,
    email: data.email,
  };
}
