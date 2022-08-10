import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
  shadow: true,
})
export class MyApp {
  @State() isLoadingApp: boolean = true;
  @State() isLoggedIn: boolean = true;

  componentWillLoad(){
    this.isLoadingApp = false
  }

  render() {
    return (
      <ion-app>
        {this.isLoadingApp ? (
          <is-loading-app />
        ) : (
          <div>
            {this.isLoggedIn ? <router-by-login></router-by-login> : <router-by-logout></router-by-logout>}
            <ion-nav />
          </div>
        )}
      </ion-app>
    );
  }

}
