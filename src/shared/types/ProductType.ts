import { CategoryType } from './CategoryType';

export interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string;
  width: number;
  height: number;
  length: number;
  weight: number;
  diameter: number;
  category: CategoryType;
}
