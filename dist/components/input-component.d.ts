import type { Components, JSX } from "../types/components";

interface InputComponent extends Components.InputComponent, HTMLElement {}
export const InputComponent: {
  prototype: InputComponent;
  new (): InputComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
