import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";
import { MainBanner } from "@/widgets/main-banner";

export class MainBannerBlock extends BaseBlock {
  public static override readonly name: string = "main_banner";
  public component = () => MainBanner;
}
