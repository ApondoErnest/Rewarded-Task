import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./user/account/account.component";
import { DashboardComponent } from "./user/dashboard/dashboard.component";
import { SupportComponent } from "./user/support/support.component";
import { TasksComponent } from "./user/tasks/tasks.component";

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'task',
        component: TasksComponent
    },
    {
        path: '',
        component: TasksComponent
    },
    {
        path: '/account',
        component: AccountComponent
    },
    {
        path: '/support',
        component: SupportComponent
    },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule{}