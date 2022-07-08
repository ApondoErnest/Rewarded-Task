import { IPaymentMethod, PaymentTypes } from './../interfaces/IPaymentMethod';

export const PAYMENT_METHODS: IPaymentMethod[] = [
  {
    img: "payment/mtn-mobile.jpg?raw=true",
    name: "MTN Mobile Money",
    type: PaymentTypes.mobile,
    id: '1'
  },
  {
    img: "payment/orange-money.png?raw=true",
    name: "Orange Money",
    type: PaymentTypes.mobile,
    id: '2'
  },
  {
    img: "payment/Logo-EU-Mobile-Money1.png?raw=true",
    name: "EU Mobile Money",
    type: PaymentTypes.mobile,
    id: '3'
  }
]
