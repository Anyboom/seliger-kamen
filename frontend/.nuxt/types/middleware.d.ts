import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "dynamic-page"
declare module 'nuxt/app' {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}