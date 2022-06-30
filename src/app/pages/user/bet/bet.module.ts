import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetRoutingModule } from './bet-routing.module';
import { BetCategoriesComponent } from './bet-categories/bet-categories.component';
import {BetOptionsComponent} from './bet-options/bet-options.component';
import { BetCheckoutComponent } from './bet-checkout/bet-checkout.component'


@NgModule({
  declarations: [
    BetCategoriesComponent,
    BetOptionsComponent,
    BetCheckoutComponent
  ],
  imports: [
    CommonModule,
    BetRoutingModule
  ]
})
export class BetModule { }
