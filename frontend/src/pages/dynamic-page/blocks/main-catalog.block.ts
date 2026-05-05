import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";

export class MainCatalogBlock extends BaseBlock {
  public static override readonly name: string = "main_catalog";
  public component = () => import("@/widgets/main-catalog/ui/MainCatalog.vue");
}
