import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
})
export class MyComponent {
  @State() formControls = {
    firstName: null,
    lastName: null,
    age: null,
    gender: null,
  };

  changeFormValue(controlName, value) {
    this.formControls = {
      ...this.formControls,
      [controlName]: value
    };
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
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label htmlFor="fname">First Name
          <input required type="text" id="fname" value={this.formControls.firstName} onInput={(e: any) =>
            this.changeFormValue("firstName",
              e.target.value)
          } name="firstname" placeholder="Your first name.."/>
        </label>

        <label htmlFor="lname">Last Name
          <input required type="text" id="lname" value={this.formControls.lastName} onInput={(e: any) =>
            this.changeFormValue("lastName",
              e.target.value)
          } name="lastname" placeholder="Your last name.."/>
        </label>

        <label htmlFor="age">Age
          <input required type="number" id="age" value={this.formControls.age} onInput={(e: any) =>
            this.changeFormValue("age",
              e.target.value)
          } name="age" placeholder="Age"/>
        </label>

        <label htmlFor="gender">Gender
          <select required onInput={(e: any) =>
            this.changeFormValue("gender",
              e.target.value)
          } id="gender" name="gender">
            <option disabled>--Select--</option>
            <option selected={this.formControls.gender === 'male'} value="male">Male</option>
            <option selected={this.formControls.gender === 'female'} value="female">Female</option>
          </select>
        </label>

        <label htmlFor="img">Image
          <input required onInput={(e: any) =>
            this.changeFormValue("img",
              e.target.value)
          } type="file" id="img" name="img" accept="image/*"/>
        </label>

        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
