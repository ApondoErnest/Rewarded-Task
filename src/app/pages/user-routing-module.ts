import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./user/account/account.component";
import { DashboardComponent } from "./user/dashboard/dashboard.component";
import { MainComponent } from "./user/main/main.component";
import { SupportComponent } from "./user/support/support.component";
import { TasksComponent } from "./user/tasks/tasks.component";

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