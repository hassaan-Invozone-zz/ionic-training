import { r as registerInstance, h } from './index-8ed2108e.js';

const formComponentCss = "input[type=text]{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}input[type=number]{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}select{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}input[type=submit]{width:100%;background-color:#4CAF50;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer}input[type=submit]:hover{background-color:#45a049}.header{display:flex;align-items:center;flex-direction:column;justify-content:center}";

const FormComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.formControls = {
      firstName: null,
      lastName: null,
      age: null,
      gender: null,
    };
  }
  changeFormValue(controlName, value) {
    this.formControls = Object.assign(Object.assign({}, this.formControls), { [controlName]: value.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.formControls);
    fetch("https://webhook.site/941eadb0-f3b7-4330-8e6e-cd7f006e3509", {
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify(this.formControls),
    }).then(response => response.json())
      .then(json => console.log(json));
  }
  render() {
    return (h("form", { onSubmit: (e) => this.handleSubmit(e) }, h("input-component", { inputHandler: (e) => this.changeFormValue('firstName', e.target), label: "First Name", value: "firstName" }), h("input-component", { inputHandler: (e) => this.changeFormValue('lastName', e.target), label: "Last Name", value: "lastName" }), h("input-component", { inputHandler: (e) => this.changeFormValue('age', e.target), label: "Age", value: "age" }), h("select-component", { inputHandler: (e) => this.changeFormValue('gender', e.target), label: "Gander", value: "gender" }), h("label", { htmlFor: "img" }, "Image", h("input", { onInput: (e) => this.changeFormValue("img", e.target), type: "file", id: "img", name: "img", accept: "image/*" })), h("input", { type: "submit", value: "Submit" })));
  }
};
FormComponent.style = formComponentCss;

export { FormComponent as form_component };
