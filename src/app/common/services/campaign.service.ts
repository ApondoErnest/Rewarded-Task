import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { IBetCategories, IBetOPtions, ICampaign } from '../interfaces/ICampaign';
import { BET_CATEGORIES_LIST, BET_OPTIONS, CAMPAIGN_LIST } from '../mock/campaigns';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor() { }

  getAvailableCampaigns(): Observable<ICampaign[]> {

    return of(CAMPAIGN_LIST);
  }

  getCampaignCategories(campaignId: string): Observable<IBetCategories[]>  {
    return of (BET_CATEGORIES_LIST)
  }

  getBetOptions(categoryId: number):Observable<IBetOPtions[]> {
    return of(BET_OPTIONS);
  }
}
