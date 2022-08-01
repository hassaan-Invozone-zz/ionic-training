import type { Components, JSX } from "../types/components";

interface FormComponent extends Components.FormComponent, HTMLElement {}
export const FormComponent: {
  prototype: FormComponent;
  new (): FormComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
