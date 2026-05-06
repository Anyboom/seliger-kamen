import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";

export class AppHeaderBlock extends BaseBlock {
  public static override readonly name: string = "app_header";
  public component = () => import("@/widgets/app-header/ui/AppHeader.vue");
}
