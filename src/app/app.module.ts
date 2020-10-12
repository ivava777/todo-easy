import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { TasksFilterPipe } from './shared/tasks-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    TaskFormComponent,
    TasksFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
