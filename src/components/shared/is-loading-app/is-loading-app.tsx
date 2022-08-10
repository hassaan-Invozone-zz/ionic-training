import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'is-loading-app',
  styleUrl: 'is-loading-app.scss',
  shadow: true,
})

export class IsLoadingApp {

  render() {
    return (
      <Host>
        <h1>App is loading....</h1>
      </Host>
    );
  }

}
