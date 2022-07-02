import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    data: {title: 'Rewarded | Home'},
    component: HomeComponent
  },
  {
    path: 'login',
    data: {title: 'Rewarded | Login'},
    component: LoginComponent
  },
  {
    path: 'register',
    data: {title: 'Rewarded | Register'},
    component: RegisterComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user-module.module').then(m => m.UserModuleModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
