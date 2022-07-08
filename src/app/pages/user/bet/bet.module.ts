import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BetCategoriesComponent } from './bet-categories/bet-categories.component';
import { BetCheckoutComponent } from './bet-checkout/bet-checkout.component';
import { BetOptionsComponent } from './bet-options/bet-options.component';
import { BetRoutingModule } from './bet-routing.module';


@NgModule({
  declarations: [
    BetCategoriesComponent,
    BetOptionsComponent,
    BetCheckoutComponent
  ],
  imports: [
    CommonModule,
    BetRoutingModule,
    FormsModule
  ]
})
export class BetModule { }
