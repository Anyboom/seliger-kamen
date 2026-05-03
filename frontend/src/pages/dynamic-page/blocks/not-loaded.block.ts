import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";
import { NotLoaded } from "@/widgets/not-loaded";

export class NotLoadedBlock extends BaseBlock {
  public static override readonly name: string = "not_loaded";
  public component = () => NotLoaded;
}
