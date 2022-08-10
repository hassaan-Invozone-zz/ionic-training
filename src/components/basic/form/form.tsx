import { Component, h, State } from '@stencil/core';
import postDataApi from '../../../services/api';

@Component({
  tag: 'form-component',
  styleUrl: 'form.scss',
  shadow: true,
})
export class FormComponent {
  @State() formControls = {
    firstName: null,
    lastName: null,
    age: null,
    gender: null,
  };

  changeFormValue(controlName:string, value:any) {
    this.formControls = {
      ...this.formControls,
      [controlName]: value.value
    };
  }

  handleSubmit(e) {
    e.preventDefault();
   postDataApi(this.formControls)
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
