import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IBetCategories } from '../../../../common/interfaces/ICampaign';
import { CampaignService } from '../../../../common/services/campaign.service';
import { NavService } from '../../../../common/services/nav.service';

@Component({
  selector: 'app-bet-categories',
  templateUrl: './bet-categories.component.html',
  styleUrls: ['./bet-categories.component.css']
})
export class BetCategoriesComponent implements OnInit {
  campaignList: IBetCategories[] = [];
  constructor(private campaignService: CampaignService,
    private route: ActivatedRoute,
    public navService: NavService,
    private router: Router) { }

  ngOnInit(): void {
    const campaignId = this.route.snapshot.queryParamMap.get('id');
    console.log(campaignId);
    if (campaignId)
      this.campaignService.getCampaignCategories(campaignId).subscribe(data => this.campaignList = data);

      this.navService.showCart = true;
      this.navService.showCoins = false;
      
      this.router.events.subscribe( event => {
        if (event instanceof NavigationEnd) {
          console.log('nav end')
          this.navService.showCart = false;
          this.navService.showCoins = true;
        }
      })
  }
  
  goToBetOptions(selectedCategory: IBetCategories):void {
    this.router.navigate(['/user/bet', selectedCategory.id])
  }

}
