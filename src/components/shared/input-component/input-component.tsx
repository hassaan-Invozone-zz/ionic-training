import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'input-component',
  styleUrl: 'input-component.css',
})
export class InputComponent {

  @Prop() label: string
  @Prop() value: string
  @Prop() inputHandler: (e: MouseEvent) => void;

  render() {
    return (
      <Host>
        <label htmlFor={this.value}>{this.label}
          <input required onInput={this.inputHandler} type="text" id={this.value} name={this.value} placeholder={'Enter Your '+this.label}/>
        </label>
      </Host>
    );
  }

}
