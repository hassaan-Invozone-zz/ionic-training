import { r as registerInstance, h, i as Host } from './index-8ed2108e.js';

const selectComponentCss = ":host{display:block}";

const SelectComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("label", { htmlFor: this.value }, this.label, h("select", { required: true, onInput: this.inputHandler, id: this.value, name: this.value }, h("option", { disabled: true }, "--Select--"), h("option", { value: "male" }, "Male"), h("option", { value: "female" }, "Female")))));
  }
};
SelectComponent.style = selectComponentCss;

export { SelectComponent as select_component };
