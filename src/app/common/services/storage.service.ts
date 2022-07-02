import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private key = "@bbn2022";

  constructor() { }

  public saveData(key: string, value: string, encrypt =false) {
    if (encrypt) localStorage.setItem(key, this.encrypt(value));
    else localStorage.setItem(key, this.encrypt(value));
  }

  public getData(key: string, decrypt=false) {
    let data = localStorage.getItem(key)|| "";
    return decrypt ? this.decrypt(data): data;
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  private encrypt(txt: string): string {
    return AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return AES.decrypt(txtToDecrypt, this.key).toString(enc.Utf8);
  }
}
