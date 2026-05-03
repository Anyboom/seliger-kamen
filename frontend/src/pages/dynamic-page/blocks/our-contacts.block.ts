import { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";
import { OurContacts } from "@/widgets/our-contacts";

export class OurContactsBlock extends BaseBlock {
  public static override readonly name: string = "our_contacts";
  public component = () => OurContacts;
}
