import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private _bottomNav: string;
  private _showCart: boolean;
  private _showCoins: boolean;
  private _cartNumber: number;
  constructor() { 
    this._bottomNav = 'Dashboard';
    this._showCoins = true;
    this._showCart = false;
    this._cartNumber = 22;
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
  public get bottomNav(): string {
    return this._bottomNav;
  }
  public set bottomNav(value: string) {
    this._bottomNav = value;
  }

  public get cartNumber(): number {
    return this._cartNumber;
  }
  public set cartNumber(value: number) {
    this._cartNumber = value;
  }
}
