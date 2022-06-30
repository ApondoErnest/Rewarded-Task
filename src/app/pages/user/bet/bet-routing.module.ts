import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BetCategoriesComponent} from './bet-categories/bet-categories.component';
import { BetCheckoutComponent } from './bet-checkout/bet-checkout.component';
import {BetOptionsComponent} from './bet-options/bet-options.component'

const routes: Routes = [
  {
    path: '',
    component: BetCategoriesComponent
  },
  // {
  //   path: 'bet',
  //   component: BetCategoriesComponent
  // },
  {
    path: 'checkout',
    component: BetCheckoutComponent
  },
  {
    path: ':id',
    component: BetOptionsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetRoutingModule { }
