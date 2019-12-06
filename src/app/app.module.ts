import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskModule } from '../tasks/task.module';
import { NgxsModule, Store } from '@ngxs/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule,
    NgxsModule.forFeature([])
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
