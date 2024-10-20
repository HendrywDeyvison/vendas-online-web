import { UserType } from './../../modules/login/types/UserType';
import { AddressType } from './AddressType';
import { OrderProductType } from './OrderProduct';
import { PaymentType } from './PaymentType';
import { ProductType } from './ProductType';

export interface OrderType {
  id: number;
  date: string;
  user: UserType;
  payment: PaymentType;
  address: AddressType;
  ordersProduct?: OrderProductType[];
  amountProducts?: number;
}
