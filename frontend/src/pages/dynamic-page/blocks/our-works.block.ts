import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";

export class OurWorksBlock extends BaseBlock {
  public static override readonly name: string = "our_works";
  public component = () => import("@/widgets/our-works/ui/OurWorks.vue");
}
