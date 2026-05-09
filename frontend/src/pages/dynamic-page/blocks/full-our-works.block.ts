import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";

export class FullOurWorksBlock extends BaseBlock {
  public static override readonly name: string = "full_our_works";
  public component = () => import("~/widgets/full-our-works/ui/FullOurWorks.vue");
}
