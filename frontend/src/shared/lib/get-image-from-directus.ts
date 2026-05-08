import { pathDirectus } from "~/shared/api/path-directus";

export function getImageFromDirectus(id: string) {
  return `${pathDirectus(false)}/assets/${id}`;
}
