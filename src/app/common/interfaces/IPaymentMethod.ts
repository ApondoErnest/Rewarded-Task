export interface IPaymentMethod {
  img: string,
  name: string,
  id: string,
  type: PaymentTypes
}

export enum PaymentTypes {
  mobile,
  visa,
  bank
}
