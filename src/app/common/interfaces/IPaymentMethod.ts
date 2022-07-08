export interface IPaymentMethod {
  img: string,
  name: string,
  id: number,
  type: PaymentTypes
}

export enum PaymentTypes {
  mobile,
  visa,
  bank
}
