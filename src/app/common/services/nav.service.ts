import { HttpClient } from '@angular/common/http';
import { BottomNavs } from 'src/app/common/interfaces/navs';
import { Injectable } from '@angular/core';
import { Subject, Observable, of, map, catchError, throwError } from 'rxjs';
import { WEB_CONFIG_URL } from '../config/config';
import { ApiResponse } from '../interfaces/Auth';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private bottomNavs: BottomNavs[] = [];
  errorNav = new Subject<string>();

  private _bottomNav!: BottomNavs;
  private _showCart: boolean;
  private _showCoins: boolean;
  private _cartNumber: number;
  private _checkout = new Subject();

  constructor(private http: HttpClient) { 
    this._showCoins = true;
    this._showCart = false;
    this._cartNumber = 0;
  }

  public fetchbottomNavs(type: string): Observable<BottomNavs[]> {
    if (this.bottomNavs.length > 0) {
      return of(this.bottomNavs);
    }

    return this.http
    .get<ApiResponse>(WEB_CONFIG_URL + `/${type}`)
    .pipe(
      map(apires => {          
        if (apires.errorCode === '0000') {
            this.bottomNavs = <BottomNavs[]> apires.data;
          }
        return this.bottomNavs.sort((a, b) => a.order - b.order);
      }),
      catchError(errorRes => {
        return throwError(() => new Error('Server error please try again later'));
      })
    );
  }

  public get showCart(): boolean {
    return this._showCart;
  }
  public set showCart(value: boolean) {
    this._showCart = value;
  }
  public get showCoins(): boolean {
    return this._showCoins;
  }
  public set showCoins(value: boolean) {
    this._showCoins = value;
  }
  public get bottomNav(): BottomNavs {
    return this._bottomNav;
  }
  public set bottomNav(value: BottomNavs) {
    this._bottomNav = value;
  }

  public get cartNumber(): number {
    return this._cartNumber;
  }
  public set cartNumber(value: number) {
    this._cartNumber = value;
  }

  public getcheckout() {
    return this._checkout;
  }
  public performCheckout(value:number) {
    this._checkout.next(value);
  }
}
