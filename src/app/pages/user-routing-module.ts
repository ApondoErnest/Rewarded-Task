import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./user/dashboard/dashboard.component";
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
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule{}