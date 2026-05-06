import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";

export class FullCatalogBlock extends BaseBlock {
  public static override readonly name: string = "full_catalog";
  public component = () => import("@/widgets/full-catalog/ui/FullCatalog.vue");
}
