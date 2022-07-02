import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _username!: string;
  private _name!: string;
  private _email!: string;
  private _tel!: string;
  private _refreshToken!: string;


  constructor() { }

  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get refreshToken(): string {
    return this._refreshToken;
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public get tel(): string {
    return this._tel;
  }
  public set tel(value: string) {
    this._tel = value;
  }
}
