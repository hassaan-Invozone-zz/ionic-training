import { Component, h } from '@stencil/core';

@Component({
  tag: 'login-screen',
  styleUrl: 'login-screen.css',
  shadow: true,
})
export class LoginScreen {

  render() {
    return (
      <h1>Login</h1>
    );
  }

}
