import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService,
    private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  canLoad(route:Route) {
    const url = `${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): true|UrlTree {
    if (this.authService.isLoggedIn()) { return true; }

    this.authService.redirectUrl = url;

    return this.router.parseUrl('/login');
  }
  
}
