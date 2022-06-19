import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing-module';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { AccountComponent } from './user/account/account.component';
import { TasksComponent } from './user/tasks/tasks.component';
import { ComponentsModuleModule } from '../component/components-module.module';
import { SupportComponent } from './user/support/support.component';
import { MainComponent } from './user/main/main.component';
import { GameComponent } from "./user/games/game.component";
import { BetModule } from './user/bet/bet.module';



@NgModule({
  declarations: [
    DashboardComponent,
    AccountComponent,
    TasksComponent,
    SupportComponent,
    MainComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ComponentsModuleModule,
    BetModule
  ]
})
export class UserModuleModule { }
