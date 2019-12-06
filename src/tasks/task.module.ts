import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule, Store } from '@ngxs/store';

import { TaskComponent } from './components/task.component';
import { PureTaskListComponent } from './components/pure-task-list.component';
import { TasksState } from './state/task.state';
import { HostDispatchErrorComponent } from './containers/host-dispatch-error.component';



@NgModule({
  imports: [CommonModule, NgxsModule.forRoot([TasksState])],
  exports: [ TaskComponent, PureTaskListComponent],
  declarations: [ TaskComponent, PureTaskListComponent, HostDispatchErrorComponent],
  providers: [Store],
})
export class TaskModule {}

