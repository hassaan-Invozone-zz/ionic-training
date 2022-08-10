import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'router-by-logout',
  styleUrl: 'router-by-logout.css',
  shadow: true,
})
export class RouterByLogout {

  render() {
    return (
      <Host>
        <h1>Logout</h1>
      </Host>
    );
  }

}
