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
                data: {title: 'Rewarded | Task'},
                component: TasksComponent
            },
            {
                path: 'dashboard',
                data: {title: 'Rewarded | Dashboard'},
                component: DashboardComponent
            },
            {
                path: 'account',
                data: {title: 'Rewarded | Account'},
                component: AccountComponent
            },
            {
                path: 'support',
                data: {title: 'Rewarded | Support'},
                component: SupportComponent
            },
            {
                path: 'games',
                data: {title: 'Rewarded | Games'},
                component: GameComponent
            },
            {
                path: 'bet',
                data: {title: 'Rewarded | Bet'},
                loadChildren: () => import('./user/bet/bet.module').then(m => m.BetModule)
              },
            {
                path: '',
                data: {title: 'Rewarded | Dashboard'},
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