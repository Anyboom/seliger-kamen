import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";
import { OftenAsk } from "@/widgets/often-ask";

export class OftenAskBlock extends BaseBlock {
  public static override readonly name: string = "often_ask";
  public component = () => OftenAsk;
}
