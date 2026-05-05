import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";
import { MainCatalog } from "@/widgets/main-catalog";

export class MainCatalogBlock extends BaseBlock {
  public static override readonly name: string = "main_catalog";
  public component = () => MainCatalog;
}
