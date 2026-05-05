import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";

export class NotLoadedBlock extends BaseBlock {
  public static override readonly name: string = "not_loaded";
  public component = () => import("@/widgets/not-loaded/ui/NotLoaded.vue");
}
