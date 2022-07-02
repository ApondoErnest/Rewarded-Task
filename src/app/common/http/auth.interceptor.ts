import { HttpEvent, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HmacSHA256, enc } from 'crypto-js';
import { StorageService } from '../services/storage.service';
const TOKEN_HEADER_KEY = 'Authorization';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    CLIENT_USERNAME = "task@2022";
    CLIENT_KEY = "task@2022"; 

    constructor(private storageService: StorageService) {}

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {
        
        const headers:HttpHeaders = req.headers;

        const pathname = new URL(req.url).pathname;
        const search = new URL(req.url).search;

        const idToken = this.storageService.getData("jwt_token");

        headers.set("Content-Signature", this.CLIENT_USERNAME.concat(":").concat(this.signContent(pathname + search)));

        if (idToken)
            headers.set(TOKEN_HEADER_KEY, "Bearer " + idToken);

        let clonedReq = req.clone({
            headers: headers.set("Content-Signature", this.CLIENT_USERNAME.concat(":").concat(this.signContent(pathname + search)))
        });
        return next.handle(clonedReq);
    }


    signContent(data: string): string {
        const hash = HmacSHA256(data, this.CLIENT_KEY);
        return enc.Base64.stringify(hash);
    }
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ];