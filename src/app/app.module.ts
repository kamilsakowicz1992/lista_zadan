import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';

import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TasksService } from './services/tasks.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';
import { HttpService } from './services/http.service';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';

/**
 * Zastąp te ustawienia swoimi ustawieniami z firebase
 */
const config = {
  apiKey: 'wstaw_swoje',
  authDomain: 'wstaw_swoje',
  databaseURL: 'wstaw_swoje',
  projectId: 'wstaw_swoje',
  storageBucket: 'wstaw_swoje',
  messagingSenderId: 'wstaw_swoje'
};

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [TasksService, HttpService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
