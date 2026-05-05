import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";

export class OurAdvantagesBlock extends BaseBlock {
  public static override readonly name: string = "our_advantages";
  public component = () => import("@/widgets/our-advantages/ui/OurAdvantages.vue");
}
