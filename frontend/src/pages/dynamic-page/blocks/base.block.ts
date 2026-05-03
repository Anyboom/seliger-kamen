import type { LazyComponent } from "@/pages/dynamic-page/model/lazy-component.type.ts";
import type { SimpleComponent } from "@/pages/dynamic-page/model/simple-component.type.ts";

export abstract class BaseBlock {
  public static readonly name: string;
  public abstract component: LazyComponent | SimpleComponent;
}
