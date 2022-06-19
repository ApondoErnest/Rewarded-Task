import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICampaign } from '../../../common/interfaces/ICampaign';
import { CampaignService } from '../../../common/services/campaign.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  campaignList: ICampaign[] = [];
  constructor(
    private campaignService: CampaignService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.campaignService.getAvailableCampaigns().subscribe(data => this.campaignList = data);
  }

  gotToGame(game: ICampaign) {
    switch (game.type) {
      case 'bet':
        console.log(game.campaignId)
        this.router.navigate(['/user/bet'], {queryParams: {id: game.campaignId}})
        break;
    
      default:
        break;
    }
  }
}
