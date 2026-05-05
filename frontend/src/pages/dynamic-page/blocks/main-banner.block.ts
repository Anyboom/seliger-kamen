import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";

export class MainBannerBlock extends BaseBlock {
  public static override readonly name: string = "main_banner";
  public component = () => import("@/widgets/main-banner/ui/MainBanner.vue");
}
