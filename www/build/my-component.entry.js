import { r as registerInstance, h } from './index-55463aa0.js';

const myComponentCss = "input[type=text],input[type=number],select{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}input[type=submit]{width:100%;background-color:#4CAF50;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer}input[type=submit]:hover{background-color:#45a049}";

const MyComponent = class {
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
    this.formControls = Object.assign(Object.assign({}, this.formControls), { [controlName]: value });
  }
  handleSubmit(e) {
    e.preventDefault();
    fetch("https://webhook.site/941eadb0-f3b7-4330-8e6e-cd7f006e3509", {
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify(this.formControls),
    }).then(response => response.json())
      .then(json => console.log(json));
  }
  render() {
    return (h("form", { onSubmit: (e) => this.handleSubmit(e) }, h("label", { htmlFor: "fname" }, "First Name", h("input", { required: true, type: "text", id: "fname", value: this.formControls.firstName, onInput: (e) => this.changeFormValue("firstName", e.target.value), name: "firstname", placeholder: "Your first name.." })), h("label", { htmlFor: "lname" }, "Last Name", h("input", { required: true, type: "text", id: "lname", value: this.formControls.lastName, onInput: (e) => this.changeFormValue("lastName", e.target.value), name: "lastname", placeholder: "Your last name.." })), h("label", { htmlFor: "age" }, "Age", h("input", { required: true, type: "number", id: "age", value: this.formControls.age, onInput: (e) => this.changeFormValue("age", e.target.value), name: "age", placeholder: "Age" })), h("label", { htmlFor: "gender" }, "Gender", h("select", { required: true, onInput: (e) => this.changeFormValue("gender", e.target.value), id: "gender", name: "gender" }, h("option", { disabled: true }, "--Select--"), h("option", { selected: this.formControls.gender === 'male', value: "male" }, "Male"), h("option", { selected: this.formControls.gender === 'female', value: "female" }, "Female"))), h("label", { htmlFor: "img" }, "Image", h("input", { required: true, onInput: (e) => this.changeFormValue("img", e.target.value), type: "file", id: "img", name: "img", accept: "image/*" })), h("input", { type: "submit", value: "Submit" })));
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
