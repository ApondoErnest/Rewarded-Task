import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { REGISTER_URL, LOGIN_URL } from '../config/config';
import { ApiResponse, Login, Register, User } from '../interfaces/Auth';
import { StorageService } from './storage.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private userService: UserService,
    private storageService: StorageService) {

  }

  login(data: Login ):Promise<string> {
      let loginPromise = new Promise<string>((resolve, reject) => {
        this.http.post<ApiResponse>(LOGIN_URL, data).subscribe(
            {
                next: data => {
                    if (data.errorCode === '0000'){
                        this.setSession(<User> data.data)
                        resolve("");   
                    }

                    else reject(data.message ? data.message : "Server error");
                },
                error: e => reject("Server Error")
            }
          );    
      }); 

      return loginPromise;
  }
  register(data: Register) {
      return this.http.post<ApiResponse>(REGISTER_URL, data);
  }
        
  private setSession(user: User) {
      const expiresAt = moment().add(user.timeToExpire,'second');
      
      this.userService.username = user.username;
      this.userService.name = user.name;
      this.userService.tel = user.tel;
      this.userService.refreshToken = user.refreshToken;
      this.storageService.saveData('id_token', user.accessToken);
      this.storageService.saveData("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }          

  logout() {
    this.storageService.removeData("id_token");
    this.storageService.removeData("expires_at");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = this.storageService.getData("expires_at");
      const expiresAt = JSON.parse(expiration + "");
      return moment(expiresAt);
  }    
}
