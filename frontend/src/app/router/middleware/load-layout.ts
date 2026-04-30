import type { RouteLocationNormalized } from "vue-router";
import { Layouts } from "@/app/layouts/layouts.ts";
import { layoutsMap } from "@/app/layouts/layouts-map.ts";

export async function loadLayout(route: RouteLocationNormalized): Promise<void> {
  const { layout } = route.meta;
  const normalizedLayoutName = layout || Layouts.main;
  const fileName = layoutsMap[normalizedLayoutName];
  const fileNameWithoutExtension = fileName.split(".vue")[0];

  const component = await import(`../../layouts/${fileNameWithoutExtension}.vue`);
  route.meta.layoutComponent = component.default;
}
