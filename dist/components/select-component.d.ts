import type { Components, JSX } from "../types/components";

interface SelectComponent extends Components.SelectComponent, HTMLElement {}
export const SelectComponent: {
  prototype: SelectComponent;
  new (): SelectComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
