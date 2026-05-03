import type { BaseBlock } from "@/pages/dynamic-page/blocks/base.block.ts";
import { AboutUsBlock } from "@/pages/dynamic-page/blocks/about-us.block.ts";
import { NotLoadedBlock } from "@/pages/dynamic-page/blocks/not-loaded.block.ts";
import { MainBannerBlock } from "@/pages/dynamic-page/blocks/main-banner.block.ts";
import { OurAdvantagesBlock } from "@/pages/dynamic-page/blocks/our-advantages.block.ts";
import { OftenAskBlock } from "@/pages/dynamic-page/blocks/often-ask.block.ts";
import { OurContactsBlock } from "@/pages/dynamic-page/blocks/our-contacts.block.ts";
import { AppFooterBlock } from "@/pages/dynamic-page/blocks/app-footer.block.ts";

export class BlocksRepository {
  private static readonly blocks: Map<string, BaseBlock> = new Map<string, BaseBlock>([
    [AboutUsBlock.name, new AboutUsBlock()],
    [MainBannerBlock.name, new MainBannerBlock()],
    [NotLoadedBlock.name, new NotLoadedBlock()],
    [OurAdvantagesBlock.name, new OurAdvantagesBlock()],
    [OftenAskBlock.name, new OftenAskBlock()],
    [OurContactsBlock.name, new OurContactsBlock()],
    [AppFooterBlock.name, new AppFooterBlock()],
  ]);

  static get(name: string): BaseBlock {
    return this.blocks.get(name) ?? this.getFallbackBlock();
  }

  private static getFallbackBlock(): BaseBlock {
    return this.blocks.get(NotLoadedBlock.name)!;
  }
}
