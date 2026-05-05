import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";

export class AppFooterBlock extends BaseBlock {
  public static override readonly name: string = "app_footer";
  public component = () => import("@/widgets/app-footer/ui/AppFooter.vue");
}
