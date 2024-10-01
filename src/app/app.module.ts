import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { TaskService } from './services/task.service';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskViewComponent } from "./task-view/task-view.component";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FormsModule,
    TaskViewComponent,
    ReactiveFormsModule,
    TaskCreateComponent,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
 
],
  providers: [TaskService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
