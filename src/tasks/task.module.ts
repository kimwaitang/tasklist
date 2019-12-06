import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule, Store } from '@ngxs/store';

import { TaskComponent } from './components/task.component';
import { PureTaskListComponent } from './components/pure-task-list.component';
import { TasksState } from './state/task.state';
import { InboxScreenComponent } from './containers/inbox-screen.component';
import { PureInboxScreenComponent } from './components/pure-inbox-screen.component';
import { TaskListComponent } from './containers/task-list.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forRoot([TasksState])],
  exports: [ TaskComponent, PureTaskListComponent],
  declarations: [ TaskComponent, PureTaskListComponent],
  providers: [],
})
export class TaskModule {}

