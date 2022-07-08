import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { IMG_URL_BASE, PREDICTION_URL } from '../config/config';
import { ApiResponse } from '../interfaces/Auth';
import { IBetCategories, IBetOPtions, ICampaign, SavePredictionRequest } from '../interfaces/ICampaign';
import { BET_CATEGORIES_LIST, BET_OPTIONS, CAMPAIGN_LIST } from '../mock/campaigns';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private imageBaseUrl = IMG_URL_BASE;
  private _selectedOptions: IBetOPtions[] = [];
  private _selectedCategories: IBetCategories[] = [];

  constructor(private http: HttpClient) { }

  getAvailableCampaigns(): Observable<ICampaign[]> {

    return of(CAMPAIGN_LIST);
  }

  getCampaignCategories(campaignId: string): Observable<IBetCategories[]> {
    return of(BET_CATEGORIES_LIST)
  }

  savePredition(body: SavePredictionRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(PREDICTION_URL, body);
  }

  getBetOptions(categoryId: number): Observable<IBetOPtions[]> {
    return of(BET_OPTIONS);
  }

  public get selectedOptions(): IBetOPtions[] {
    return this._selectedOptions;
  }
  public set selectedOptions(value: IBetOPtions[]) {
    this._selectedOptions = value;
  }
  public get selectedCategories(): IBetCategories[] {
    return this._selectedCategories;
  }
  public set selectedCategories(value: IBetCategories[]) {
    this._selectedCategories = value;
  }

  public get imgbaseUrl(): String {
    return this.imageBaseUrl;
  }
}
