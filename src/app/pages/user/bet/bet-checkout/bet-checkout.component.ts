import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CampaignService } from 'src/app/common/services/campaign.service';
import { NavService } from 'src/app/common/services/nav.service';

@Component({
  selector: 'app-bet-checkout',
  templateUrl: './bet-checkout.component.html',
  styleUrls: ['./bet-checkout.component.css']
})
export class BetCheckoutComponent implements OnInit {
  routerEventsSubscription: Subscription;
  constructor(public campaignService: CampaignService,
    private navService: NavService,
    private router: Router) {
      this.routerEventsSubscription = new Subscription;
     }

  ngOnInit(): void {
    this.navService.showCart = true;
    this.navService.showCoins = false;

    this.routerEventsSubscription = this.subscribeToRouterEvents();
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
