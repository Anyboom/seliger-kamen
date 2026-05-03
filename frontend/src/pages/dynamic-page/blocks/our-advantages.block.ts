import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";
import { OurAdvantages } from "@/widgets/our-advantages";

export class OurAdvantagesBlock extends BaseBlock {
  public static override readonly name: string = "our_advantages";
  public component = () => OurAdvantages;
}
