import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guard/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
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
    redirectTo: '/user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
