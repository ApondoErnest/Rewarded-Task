import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./user/account/account.component";
import { DashboardComponent } from "./user/dashboard/dashboard.component";
import { MainComponent } from "./user/main/main.component";
import { SupportComponent } from "./user/support/support.component";
import { TasksComponent } from "./user/tasks/tasks.component";
import { GameComponent } from "./user/games/game.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'task',
                component: TasksComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'account',
                component: AccountComponent
            },
            {
                path: 'support',
                component: SupportComponent
            },
            {
                path: 'games',
                component: GameComponent
            },
            {
                path: 'bet',
                loadChildren: () => import('./user/bet/bet.module').then(m => m.BetModule)
              },
            {
                path: '',
                component: DashboardComponent
            }
        ]
    },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule{}