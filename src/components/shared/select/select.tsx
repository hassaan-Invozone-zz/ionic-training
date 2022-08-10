import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'select-component',
  styleUrl: 'select.css',
})
export class Select {

  @Prop() label: string
  @Prop() value: string
  @Prop() inputHandler: (e: MouseEvent) => void;

  render() {
    return (
      <Host>
        <label htmlFor={this.value}>{this.label}
          <select required onInput={this.inputHandler} id={this.value} name={this.value}>
            <option disabled>--Select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </Host>
    );
  }

}
