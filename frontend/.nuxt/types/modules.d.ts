import { NuxtModule, ModuleDependencyMeta } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface ModuleDependencies {
    ["@primevue/nuxt-module"]?: ModuleDependencyMeta<typeof import("@primevue/nuxt-module").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-leaflet"]?: ModuleDependencyMeta<typeof import("@nuxtjs/leaflet").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-vitalizer"]?: ModuleDependencyMeta<typeof import("nuxt-vitalizer").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/fontaine"]?: ModuleDependencyMeta<typeof import("@nuxtjs/fontaine").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
  }
  interface NuxtOptions {
    /**
     * Configuration for `@primevue/nuxt-module`
     */
    ["primevue"]: typeof import("@primevue/nuxt-module").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/leaflet`
     */
    ["leaflet"]: typeof import("@nuxtjs/leaflet").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-vitalizer`
     */
    ["vitalizer"]: typeof import("nuxt-vitalizer").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/fontaine`
     */
    ["fontMetrics"]: typeof import("@nuxtjs/fontaine").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
  }
  interface NuxtConfig {
    /**
     * Configuration for `@primevue/nuxt-module`
     */
    ["primevue"]?: typeof import("@primevue/nuxt-module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/leaflet`
     */
    ["leaflet"]?: typeof import("@nuxtjs/leaflet").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-vitalizer`
     */
    ["vitalizer"]?: typeof import("nuxt-vitalizer").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/fontaine`
     */
    ["fontMetrics"]?: typeof import("@nuxtjs/fontaine").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@primevue/nuxt-module", Exclude<NuxtConfig["primevue"], boolean>] | ["@nuxtjs/leaflet", Exclude<NuxtConfig["leaflet"], boolean>] | ["nuxt-vitalizer", Exclude<NuxtConfig["vitalizer"], boolean>] | ["@nuxtjs/fontaine", Exclude<NuxtConfig["fontMetrics"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface ModuleDependencies {
    ["@primevue/nuxt-module"]?: ModuleDependencyMeta<typeof import("@primevue/nuxt-module").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-leaflet"]?: ModuleDependencyMeta<typeof import("@nuxtjs/leaflet").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["nuxt-vitalizer"]?: ModuleDependencyMeta<typeof import("nuxt-vitalizer").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxtjs/fontaine"]?: ModuleDependencyMeta<typeof import("@nuxtjs/fontaine").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O | false : Record<string, unknown>> | false
  }
  interface NuxtOptions {
    /**
     * Configuration for `@primevue/nuxt-module`
     * @see https://www.npmjs.com/package/@primevue/nuxt-module
     */
    ["primevue"]: typeof import("@primevue/nuxt-module").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/leaflet`
     * @see https://www.npmjs.com/package/@nuxtjs/leaflet
     */
    ["leaflet"]: typeof import("@nuxtjs/leaflet").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-vitalizer`
     * @see https://www.npmjs.com/package/nuxt-vitalizer
     */
    ["vitalizer"]: typeof import("nuxt-vitalizer").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/fontaine`
     * @see https://www.npmjs.com/package/@nuxtjs/fontaine
     */
    ["fontMetrics"]: typeof import("@nuxtjs/fontaine").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O | false : Record<string, any> | false
  }
  interface NuxtConfig {
    /**
     * Configuration for `@primevue/nuxt-module`
     * @see https://www.npmjs.com/package/@primevue/nuxt-module
     */
    ["primevue"]?: typeof import("@primevue/nuxt-module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/leaflet`
     * @see https://www.npmjs.com/package/@nuxtjs/leaflet
     */
    ["leaflet"]?: typeof import("@nuxtjs/leaflet").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `nuxt-vitalizer`
     * @see https://www.npmjs.com/package/nuxt-vitalizer
     */
    ["vitalizer"]?: typeof import("nuxt-vitalizer").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxtjs/fontaine`
     * @see https://www.npmjs.com/package/@nuxtjs/fontaine
     */
    ["fontMetrics"]?: typeof import("@nuxtjs/fontaine").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> | false : Record<string, any> | false
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@primevue/nuxt-module", Exclude<NuxtConfig["primevue"], boolean>] | ["@nuxtjs/leaflet", Exclude<NuxtConfig["leaflet"], boolean>] | ["nuxt-vitalizer", Exclude<NuxtConfig["vitalizer"], boolean>] | ["@nuxtjs/fontaine", Exclude<NuxtConfig["fontMetrics"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}