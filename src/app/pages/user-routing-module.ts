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
                title: 'Rewarded | Task',
                component: TasksComponent
            },
            {
                path: 'dashboard',
                title: 'Rewarded | Dashboard',
                component: DashboardComponent
            },
            {
                path: 'account',
                title: 'Rewarded | Account',
                component: AccountComponent
            },
            {
                path: 'support',
                title: 'Rewarded | Support',
                component: SupportComponent
            },
            {
                path: 'games',
                title: 'Rewarded | Games',
                component: GameComponent
            },
            {
                path: 'bet',
                title: 'Rewarded | Bet',
                loadChildren: () => import('./user/bet/bet.module').then(m => m.BetModule)
              },
            {
                path: '',
                title: 'Rewarded | Dashboard',
                component: DashboardComponent
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule{}