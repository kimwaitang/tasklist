import { Component } from '@angular/core';
import { ErrorFromServer } from '../state/task.state';
import { Store } from '@ngxs/store';

@Component({
  template: `
    <inbox-screen></inbox-screen>
  `,
})
export class HostDispatchErrorComponent {
  constructor(store: Store) {
    store.dispatch(new ErrorFromServer('Error'));
  }
}
