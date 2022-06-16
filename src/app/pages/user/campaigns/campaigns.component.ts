import { Component, OnInit } from '@angular/core';
import { ICampaign } from 'src/app/common/interfaces/ICampaign';
import { CAMPAIGN_LIST } from 'src/app/common/mock/campaigns';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {
  campaignList: ICampaign[] = [];
  constructor() {
    this.campaignList = CAMPAIGN_LIST;
   }

  ngOnInit(): void {
  }

}
