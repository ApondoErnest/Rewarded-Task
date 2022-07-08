import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Subscription } from 'rxjs';
import { SavePredictionRequest } from 'src/app/common/interfaces/ICampaign';
import { CampaignService } from 'src/app/common/services/campaign.service';
import { NavService } from 'src/app/common/services/nav.service';
import { IPaymentMethod } from './../../../../common/interfaces/IPaymentMethod';
import { MessageService } from './../../../../common/services/message.service';
import { PaymentService } from './../../../../common/services/payment.service';

@Component({
  selector: 'app-bet-checkout',
  templateUrl: './bet-checkout.component.html',
  styleUrls: ['./bet-checkout.component.css']
})
export class BetCheckoutComponent implements OnInit {
  routerEventsSubscription: Subscription;
  public paymentMethodSelected!: IPaymentMethod;
  wins: number = 4000;

  constructor(public campaignService: CampaignService,
    private navService: NavService,
    private messageService: MessageService,
    public paymentService: PaymentService,
    private router: Router) {
    this.routerEventsSubscription = new Subscription;
  }

  ngOnInit(): void {
    this.navService.showCart = true;
    this.navService.showCoins = false;

    this.routerEventsSubscription = this.subscribeToRouterEvents();
  }

  playWithMobile(f: NgForm) {
    const request: SavePredictionRequest = <SavePredictionRequest>{};
    Notiflix.Confirm.show(
      'Checkout Confirmation',
      `${500} will be deducted from your account?`,
      'I Agree',
      'Cancel',
      () => {
        this.campaignService.savePredition(request).subscribe(
          {
            next: data => this.messageService.showReportSucces("Request sent Successfully, Please validate payment"),
            error: err => this.messageService.showReportFailure("Failed to place prediction")
          }
        )
      },
      () => {
        console.log('did not confirm')
      },
      {
      },
    );
  }


  ngOnDestroy() {
    this.routerEventsSubscription.unsubscribe();
  }

  private subscribeToRouterEvents() {
    return this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.navService.showCart = false;
        this.navService.showCoins = true;
      }
    });
  }
}
