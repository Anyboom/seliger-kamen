import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";
import { AboutUs } from "@/widgets/about-us";

export class AboutUsBlock extends BaseBlock {
  public static override readonly name: string = "about_us";
  public component = () => AboutUs;
}
