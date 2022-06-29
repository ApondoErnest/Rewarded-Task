import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IMG_URL_BASE } from '../../../../common/config/config';
import { IBetOPtions } from '../../../../common/interfaces/ICampaign';
import { CampaignService } from '../../../../common/services/campaign.service';
import { NavService } from '../../../../common/services/nav.service';

@Component({
  selector: 'app-bet-options',
  templateUrl: './bet-options.component.html',
  styleUrls: ['./bet-options.component.css']
})
export class BetOptionsComponent implements OnInit {

  optionsList: IBetOPtions[] = [];
  imgBase:string;
  selecetedOptions:  IBetOPtions[] = [];
  idsSelected: number[] = []
  constructor(private campaignService: CampaignService,
    private navService: NavService,
    private route: ActivatedRoute,
    private router: Router) {
      this.imgBase = IMG_URL_BASE;
     }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const categoryId = params['id'];
      console.log(categoryId);
      this.campaignService.getBetOptions(categoryId).subscribe(data => this.optionsList = data);
    })

    this.navService.showCart = true;
    this.navService.showCoins = false;

    this.router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        this.navService.showCart = false;
        this.navService.showCoins = true;
      }
    })
  }

  addOrRemoveOption(selectedOption: IBetOPtions) {
    let isPresentInSelectedOptions =false;
    for (let index = 0; index < this.selecetedOptions.length; index++) {
      if (this.selecetedOptions[index].id === selectedOption.id) {
        isPresentInSelectedOptions = true;

        this.selecetedOptions = this.selecetedOptions.filter(id => this.selecetedOptions[index].id !== selectedOption.id);

        this.idsSelected = this.idsSelected.filter(id => id !== selectedOption.id);
        break;
      }
      
    }

    if (!isPresentInSelectedOptions){
       this.selecetedOptions.push(selectedOption);
       this.idsSelected.push(selectedOption.id)
    }
  }

}
