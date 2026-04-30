import type { Layouts } from "@/app/layouts/layouts";
import type { VueElement } from "vue";

declare module "vue-router" {
  interface RouteMeta {
    layout?: Layouts;
    layoutComponent?: VueElement;
  }
}
