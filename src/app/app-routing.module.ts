import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guard/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    title: 'Rewarded | Home',
    component: HomeComponent
  },
  {
    path: 'login',
    title: 'Rewarded | Login',
    component: LoginComponent
  },
  {
    path: 'register',
    title: 'Rewarded | Register',
    component: RegisterComponent
  },
  {
    path: 'user',
    canLoad: [AuthGuard],
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
