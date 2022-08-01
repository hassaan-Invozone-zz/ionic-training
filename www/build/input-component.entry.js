import { r as registerInstance, h, i as Host } from './index-8ed2108e.js';

const inputComponentCss = ":host{display:block}";

const InputComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("label", { htmlFor: this.value }, this.label, h("input", { required: true, onInput: this.inputHandler, type: "text", id: this.value, name: this.value, placeholder: 'Enter Your ' + this.label }))));
  }
};
InputComponent.style = inputComponentCss;

export { InputComponent as input_component };
