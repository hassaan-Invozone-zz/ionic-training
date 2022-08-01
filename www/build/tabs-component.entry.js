import { r as registerInstance, h } from './index-8ed2108e.js';

const tabsComponentCss = ":host{display:block}";

const TabsExample = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      h("ion-tabs", null, h("ion-tab", { tab: "tab-schedule" }, h("ion-nav", null)), h("ion-tab", { tab: "tab-speaker" }, h("ion-nav", null)), h("ion-tab", { tab: "tab-map", component: "page-map" }, h("ion-nav", null, h("form-component", null))), h("ion-tab-bar", { slot: "bottom" }, h("ion-tab-button", { tab: "tab-schedule" }, h("ion-icon", { name: "home-outline" }), h("ion-label", null, "Home")), h("ion-tab-button", { tab: "tab-speaker" }, h("ion-icon", { name: "person-add-outline" }), h("ion-label", null, "New")), h("ion-tab-button", { tab: "tab-map" }, h("ion-icon", { name: "book-outline" }), h("ion-label", null, "Profile"))))
    ];
  }
};
TabsExample.style = tabsComponentCss;

export { TabsExample as tabs_component };
