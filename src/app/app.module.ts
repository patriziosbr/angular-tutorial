import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PostComponent } from './post/post.component';
import { PracticeComponent } from './practice/practice.component';
import { MultiPipe } from './multi.pipe';
import { TaskComponent } from './task/task.component';
import { TxtshortPipe } from './txtshort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PostComponent,
    PracticeComponent,
    MultiPipe,
    TaskComponent,
    TxtshortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
