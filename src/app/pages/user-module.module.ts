import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing-module';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { AccountComponent } from './user/account/account.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './user/tasks/tasks.component';
import { ComponentsModuleModule } from '../component/components-module.module';
import { SupportComponent } from './user/support/support.component';
import { MainComponent } from './user/main/main.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AccountComponent,
    RegisterComponent,
    LoginComponent,
    TasksComponent,
    SupportComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ComponentsModuleModule
  ]
})
export class UserModuleModule { }
