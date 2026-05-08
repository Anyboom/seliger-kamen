export function getImageFromDirectus(id: string) {
  return `${import.meta.env.VITE_DIRECTUS}/assets/${id}`;
}
