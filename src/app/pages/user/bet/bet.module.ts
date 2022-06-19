import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetRoutingModule } from './bet-routing.module';
import { BetCategoriesComponent } from './bet-categories/bet-categories.component';
import {BetOptionsComponent} from './bet-options/bet-options.component'


@NgModule({
  declarations: [
    BetCategoriesComponent,
    BetOptionsComponent
  ],
  imports: [
    CommonModule,
    BetRoutingModule
  ]
})
export class BetModule { }
