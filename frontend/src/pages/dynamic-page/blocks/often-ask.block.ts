import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";

export class OftenAskBlock extends BaseBlock {
  public static override readonly name: string = "often_ask";
  public component = () => import("@/widgets/often-ask/ui/OftenAsk.vue");
}
