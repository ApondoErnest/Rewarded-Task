import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { REGISTER_URL, LOGIN_URL } from '../config/config';
import { ApiResponse, Login, Register, User } from '../interfaces/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  login(data: Login ) {
      return this.http.post<ApiResponse>(LOGIN_URL, data);
  }
  register(data: Register) {
      return this.http.post<ApiResponse>(REGISTER_URL, data);
  }
        
  private setSession(user: User) {
      const expiresAt = moment().add(user.timeToExpire,'second');

      localStorage.setItem('id_token', user.accessToken);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }          

  logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration + "");
      return moment(expiresAt);
  }    
}
