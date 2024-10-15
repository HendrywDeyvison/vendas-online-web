import { UserType } from './../../modules/login/types/UserType';

export interface OrderType {
  id: number;
  date: string;
  user: UserType;
  amountProducts?: number;
}
