import { Component, h } from '@stencil/core';

@Component({
  tag: 'tabs-component',
  styleUrl: 'tabs-component.css'
})
export class TabsExample {
  render() {
    return [
      <ion-tabs>
        <ion-tab tab="tab-schedule">
          <ion-nav></ion-nav>
        </ion-tab>

        <ion-tab tab="tab-speaker">
          <ion-nav></ion-nav>
        </ion-tab>

        <ion-tab tab="tab-map" component="page-map">
          <ion-nav>
            <form-component></form-component>
          </ion-nav>
        </ion-tab>


        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab-schedule">
            <ion-icon name="home-outline"></ion-icon>
            <ion-label>Home</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab-speaker">
            <ion-icon name="person-add-outline"></ion-icon>
            <ion-label>New</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab-map">
            <ion-icon name="book-outline"></ion-icon>
            <ion-label>Profile</ion-label>
          </ion-tab-button>
        </ion-tab-bar>

      </ion-tabs>
    ];
  }
}
