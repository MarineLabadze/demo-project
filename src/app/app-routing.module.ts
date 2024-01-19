import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { WorkerComponent } from './components/worker/worker.component';
import { AdminComponent } from './components/admin/admin.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PendingRequestsComponent } from './components/pending-requests/pending-requests.component';
import { DeleteJobComponent } from './components/delete-job/delete-job.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { ChangeIdComponent } from './components/change-id/change-id.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path:'worker', component: WorkerComponent},
  {path:'admin', component: AdminComponent},
  {path:'schedule', component: ScheduleComponent},
  {path:'navbar', component: NavbarComponent},
  {path:'PendingRequests', component: PendingRequestsComponent},
  {path:'deleteJob',component:DeleteJobComponent},
  {path:'deleteUser',component:DeleteUserComponent},
  {path:'addJob',component:AddJobComponent},
  {path:'changeId',component:ChangeIdComponent},
  {path:'', redirectTo: '/login', pathMatch: 'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
