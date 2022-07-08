import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PAYMENT_METHODS } from '../mock/payments';
import { IPaymentMethod } from './../interfaces/IPaymentMethod';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentMethodsAvailable: IPaymentMethod[] = [];
  constructor() { }

  public fetchAvailablePaymentMethods(): Observable<IPaymentMethod[]> {
    if (this.paymentMethodsAvailable.length > 0) return of(this.paymentMethodsAvailable);

    this.paymentMethodsAvailable = PAYMENT_METHODS;
    return of(this.paymentMethodsAvailable);
  }

}
