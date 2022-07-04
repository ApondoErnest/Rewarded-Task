import { HttpErrorResponse, HttpEvent, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { HmacSHA256, enc } from 'crypto-js';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
const TOKEN_HEADER_KEY = 'Authorization';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    CLIENT_USERNAME = "task@2022";
    CLIENT_KEY = "task@2022"; 

    constructor(private storageService: StorageService,
        private router: Router) {}

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const pathname = new URL(req.url).pathname;
        const search = new URL(req.url).search;

        const idToken = this.storageService.getData("jwt_token");

        // headers.set("Content-Signature", this.CLIENT_USERNAME.concat(":").concat(this.signContent(pathname + search)));
        const headers:any = {};
        if (idToken)
            headers[TOKEN_HEADER_KEY] =  "Bearer " + idToken;
        
        headers["Content-Signature"] =  this.CLIENT_USERNAME.concat(":").concat(this.signContent(pathname + search)); 

        let clonedReq = req.clone({
            setHeaders: headers
        });

        return next.handle(clonedReq).pipe( 
            tap(() => {},
            (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status !== 401) {
                        return;
                        }
                        this.router.navigate(['login']);
                    }
                }
            ));
  
    }


    signContent(data: string): string {
        const hash = HmacSHA256(data, this.CLIENT_KEY);
        return enc.Base64.stringify(hash);
    }
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ];