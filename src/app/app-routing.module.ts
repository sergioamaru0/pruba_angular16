import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from '../app/task-create/task-create.component';
import { TaskViewComponent } from '../app/task-view/task-view.component';

const routes: Routes = [
  { path: 'app-task-create', component: TaskCreateComponent },
  { path: 'app-task-view', component: TaskViewComponent },
  { path: '', redirectTo: 'app-task-create', pathMatch: 'full' },
  { path: '**', redirectTo: 'app-task-create' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }