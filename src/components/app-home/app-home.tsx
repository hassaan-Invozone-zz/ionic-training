import { Component, State, h } from '@stencil/core';
import { store } from '@stencil/redux';
import { loadData } from '../../actions/data';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  @State() items: any;
  @State() loading: boolean;
  @State() error: any;

  loadData: (...args: any) => any;

  componentWillLoad() {
    store.mapStateToProps(this, state => {
      const { dataReducer: { items, loading, error }, } = state;
      return {
        items,
        loading,
        error,
      };
    });

    store.mapDispatchToProps(this, {
      loadData,
    });

    this.loadData();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="success">
          <ion-title>Hello World!</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-button href="/profile/hassaan">This is button</ion-button>
        <ion-list >
          {this.items.map(item => (
            <ion-item>
              <ion-label>Name: {item.name}</ion-label>
              <ion-label>Email: {item.email}</ion-label>
              <ion-label>Website: {item.website}</ion-label>
            </ion-item>
          ))}
        </ion-list>

      </ion-content>,
    ];
  }
}
