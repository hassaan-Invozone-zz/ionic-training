import type { Components, JSX } from "../types/components";

interface TabsComponent extends Components.TabsComponent, HTMLElement {}
export const TabsComponent: {
  prototype: TabsComponent;
  new (): TabsComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
