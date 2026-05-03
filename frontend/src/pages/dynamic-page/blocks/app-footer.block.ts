import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";
import { AppFooter } from "@/widgets/app-footer";

export class AppFooterBlock extends BaseBlock {
  public static override readonly name: string = "app_footer";
  public component = () => AppFooter;
}
