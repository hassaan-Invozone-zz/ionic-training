import { r as registerInstance, h, i as Host } from './index-8ed2108e.js';
import { g as getIonMode } from './ionic-global-648149f1.js';
import { s as safeCall } from './overlays-50d65578.js';
import { g as getClassMap } from './theme-7ef00c83.js';
import './hardware-back-button-fa04d6e9.js';
import './helpers-299f42d1.js';

const selectPopoverIosCss = ".sc-ion-select-popover-ios-h ion-list.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-ios,ion-label.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";

const selectPopoverMdCss = ".sc-ion-select-popover-md-h ion-list.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-md,ion-label.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md{opacity:0}ion-item.sc-ion-select-popover-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-popover-md{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08);--background-focused:var(--ion-color-primary, #3880ff);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #3880ff);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-popover-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #3880ff)}";

const SelectPopover = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * An array of options for the popover
     */
    this.options = [];
  }
  onSelect(ev) {
    this.setChecked(ev);
    this.callOptionHandler(ev);
  }
  findOptionFromEvent(ev) {
    const { options } = this;
    return options.find((o) => o.value === ev.target.value);
  }
  /**
   * When an option is selected we need to get the value(s)
   * of the selected option(s) and return it in the option
   * handler
   */
  callOptionHandler(ev) {
    const option = this.findOptionFromEvent(ev);
    const values = this.getValues(ev);
    if (option === null || option === void 0 ? void 0 : option.handler) {
      safeCall(option.handler, values);
    }
  }
  /**
   * This is required when selecting a radio that is already
   * selected because it will not trigger the ionChange event
   * but we still want to close the popover
   */
  rbClick(ev) {
    this.callOptionHandler(ev);
  }
  setChecked(ev) {
    const { multiple } = this;
    const option = this.findOptionFromEvent(ev);
    // this is a popover with checkboxes (multiple value select)
    // we need to set the checked value for this option
    if (multiple && option) {
      option.checked = ev.detail.checked;
    }
  }
  getValues(ev) {
    const { multiple, options } = this;
    if (multiple) {
      // this is a popover with checkboxes (multiple value select)
      // return an array of all the checked values
      return options.filter((o) => o.checked).map((o) => o.value);
    }
    // this is a popover with radio buttons (single value select)
    // return the value that was clicked, otherwise undefined
    const option = this.findOptionFromEvent(ev);
    return option ? option.value : undefined;
  }
  renderOptions(options) {
    const { multiple } = this;
    switch (multiple) {
      case true:
        return this.renderCheckboxOptions(options);
      default:
        return this.renderRadioOptions(options);
    }
  }
  renderCheckboxOptions(options) {
    return options.map((option) => (h("ion-item", { class: getClassMap(option.cssClass) }, h("ion-checkbox", { slot: "start", value: option.value, disabled: option.disabled, checked: option.checked }), h("ion-label", null, option.text))));
  }
  renderRadioOptions(options) {
    const checked = options.filter((o) => o.checked).map((o) => o.value)[0];
    return (h("ion-radio-group", { value: checked }, options.map((option) => (h("ion-item", { class: getClassMap(option.cssClass) }, h("ion-label", null, option.text), h("ion-radio", { value: option.value, disabled: option.disabled, onClick: (ev) => this.rbClick(ev) }))))));
  }
  render() {
    const { header, message, options, subHeader } = this;
    const hasSubHeaderOrMessage = subHeader !== undefined || message !== undefined;
    return (h(Host, { class: getIonMode(this) }, h("ion-list", null, header !== undefined && h("ion-list-header", null, header), hasSubHeaderOrMessage && (h("ion-item", null, h("ion-label", { class: "ion-text-wrap" }, subHeader !== undefined && h("h3", null, subHeader), message !== undefined && h("p", null, message)))), this.renderOptions(options))));
  }
};
SelectPopover.style = {
  ios: selectPopoverIosCss,
  md: selectPopoverMdCss
};

export { SelectPopover as ion_select_popover };
