import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";
import { OurWorks } from "@/widgets/our-works";

export class OurWorksBlock extends BaseBlock {
  public static override readonly name: string = "our_works";
  public component = () => OurWorks;
}
