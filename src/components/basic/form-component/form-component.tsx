import { Component, h,State } from '@stencil/core';

@Component({
  tag: 'form-component',
  styleUrl: 'form-component.scss',
  shadow: true,
})
export class FormComponent {
  @State() formControls = {
    firstName: null,
    lastName: null,
    age: null,
    gender: null,
  };

  changeFormValue(controlName, value) {
    this.formControls = {
      ...this.formControls,
      [controlName]: value.value
    };
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
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input-component inputHandler={(e) => this.changeFormValue('firstName',e.target)} label="First Name" value="firstName"></input-component>
        <input-component inputHandler={(e) => this.changeFormValue('lastName',e.target)} label="Last Name" value="lastName"></input-component>
        <input-component inputHandler={(e) => this.changeFormValue('age',e.target)} label="Age" value="age"></input-component>
        <select-component inputHandler={(e) => this.changeFormValue('gender',e.target)} label="Gander" value="gender"></select-component>

        <label htmlFor="img">Image
          <input onInput={(e: any) =>
            this.changeFormValue("img",
              e.target)
          } type="file" id="img" name="img" accept="image/*"/>
        </label>

        <input type="submit" value="Submit"/>
      </form>
    );
  }

}
