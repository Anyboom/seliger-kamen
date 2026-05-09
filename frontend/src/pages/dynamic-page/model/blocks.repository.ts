import type { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";
import { AboutUsBlock } from "~/pages/dynamic-page/blocks/about-us.block";
import { NotLoadedBlock } from "~/pages/dynamic-page/blocks/not-loaded.block";
import { MainBannerBlock } from "~/pages/dynamic-page/blocks/main-banner.block";
import { OurAdvantagesBlock } from "~/pages/dynamic-page/blocks/our-advantages.block";
import { OftenAskBlock } from "~/pages/dynamic-page/blocks/often-ask.block";
import { OurContactsBlock } from "~/pages/dynamic-page/blocks/our-contacts.block";
import { AppFooterBlock } from "~/pages/dynamic-page/blocks/app-footer.block";
import { OurWorksBlock } from "~/pages/dynamic-page/blocks/our-works.block";
import { MainCatalogBlock } from "~/pages/dynamic-page/blocks/main-catalog.block";
import { FullCatalogBlock } from "~/pages/dynamic-page/blocks/full-catalog.block";
import { AppHeaderBlock } from "~/pages/dynamic-page/blocks/app-header.block";
import { FullOurWorksBlock } from "~/pages/dynamic-page/blocks/full-our-works.block";

export class BlocksRepository {
  private static readonly blocks: Map<string, BaseBlock> = new Map<string, BaseBlock>([
    [AboutUsBlock.name, new AboutUsBlock()],
    [MainBannerBlock.name, new MainBannerBlock()],
    [NotLoadedBlock.name, new NotLoadedBlock()],
    [OurAdvantagesBlock.name, new OurAdvantagesBlock()],
    [OftenAskBlock.name, new OftenAskBlock()],
    [OurContactsBlock.name, new OurContactsBlock()],
    [AppFooterBlock.name, new AppFooterBlock()],
    [OurWorksBlock.name, new OurWorksBlock()],
    [MainCatalogBlock.name, new MainCatalogBlock()],
    [FullCatalogBlock.name, new FullCatalogBlock()],
    [AppHeaderBlock.name, new AppHeaderBlock()],
    [FullOurWorksBlock.name, new FullOurWorksBlock()],
  ]);

  static get(name: string): BaseBlock {
    return this.blocks.get(name) ?? this.getFallbackBlock();
  }

  private static getFallbackBlock(): BaseBlock {
    return this.blocks.get(NotLoadedBlock.name)!;
  }
}
