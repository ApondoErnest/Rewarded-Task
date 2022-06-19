import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBetCategories } from '../../../../common/interfaces/ICampaign';
import { CampaignService } from '../../../../common/services/campaign.service';

@Component({
  selector: 'app-bet-categories',
  templateUrl: './bet-categories.component.html',
  styleUrls: ['./bet-categories.component.css']
})
export class BetCategoriesComponent implements OnInit {
  campaignList: IBetCategories[] = [];
  constructor(private campaignService: CampaignService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const campaignId = this.route.snapshot.queryParamMap.get('id');
    console.log(campaignId);
    if (campaignId)
      this.campaignService.getCampaignCategories(campaignId).subscribe(data => this.campaignList = data);

  }
  
  goToBetOptions(selectedCategory: IBetCategories):void {
    this.router.navigate(['/user/bet', selectedCategory.id])
  }

}
