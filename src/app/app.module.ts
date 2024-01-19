import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { WorkerComponent } from './components/worker/worker.component';
import { AdminComponent } from './components/admin/admin.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { MatTableModule } from '@angular/material/table';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RequestComponent } from './components/schedule/request/request.component';
import { CurrentDateComponent } from './components/schedule/current-date/current-date.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/schedule/table/table.component';
import { PendingRequestsComponent } from './components/pending-requests/pending-requests.component';
import { DeleteJobComponent } from './components/delete-job/delete-job.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { ChangeIdComponent } from './components/change-id/change-id.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    WorkerComponent,
    AdminComponent,
    ScheduleComponent,
    SidebarComponent,
    RequestComponent,
    CurrentDateComponent,
    NavbarComponent,
    TableComponent,
    PendingRequestsComponent,
    DeleteJobComponent,
    DeleteUserComponent,
    AddJobComponent,
    ChangeIdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
