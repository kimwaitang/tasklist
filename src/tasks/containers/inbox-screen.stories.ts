import { storiesOf, moduleMetadata } from '@storybook/angular';
import { TaskModule } from '../task.module';
import { NgxsModule, Store } from '@ngxs/store';
import { TasksState } from '../state/task.state';
import { TaskListComponent } from './task-list.component';
import { InboxScreenComponent } from './inbox-screen.component';
import { PureInboxScreenComponent } from '../components/pure-inbox-screen.component';

storiesOf('InboxScreen', module).addDecorator(
moduleMetadata({
  imports: [TaskModule],
  declarations: [InboxScreenComponent,PureInboxScreenComponent,TaskListComponent],
  providers: [],
}))
.add('default', () => {
  return {
    template: `<inbox-screen></inbox-screen>`,
  };
})
.add('error', () => {
  return {
    template: `<pure-inbox-screen [error]="error"></pure-inbox-screen>`,
    props: {
      error: 'Something!',
    },
  };
});
