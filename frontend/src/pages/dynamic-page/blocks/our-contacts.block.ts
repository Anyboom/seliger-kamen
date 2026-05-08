import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";

export class OurContactsBlock extends BaseBlock {
  public static override readonly name: string = "our_contacts";
  public component = () => import("~/widgets/our-contacts/ui/OurContacts.vue");
}
