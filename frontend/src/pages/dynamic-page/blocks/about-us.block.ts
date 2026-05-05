import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";

export class AboutUsBlock extends BaseBlock {
  public static override readonly name: string = "about_us";
  public component = () => import("@/widgets/about-us/ui/AboutUs.vue");
}
