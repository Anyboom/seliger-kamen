export function pathDirectus(ssr: boolean = true) {
  if (import.meta.env.SSR && ssr) {
    // eslint-disable-next-line sonarjs/no-clear-text-protocols
    return "http://seliger-kamen-directus:8055";
  }

  if (import.meta.env.DEV) {
    return "https://directus.localhost";
  }

  return "https://directus.seliger-kamen.ru";
}
