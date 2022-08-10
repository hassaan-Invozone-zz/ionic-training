import { Component, h } from '@stencil/core';

@Component({
  tag: 'router-by-login',
  styleUrl: 'router-by-login.css',
  shadow: true,
})
export class RouterByLogin {

  render() {
    return (
      <ion-router root="/" useHash={false}>
        <ion-route url="/home" component="tabs-component" />
        <ion-route url="/login" component="login-screen" />
      </ion-router>

    );
  }

}
