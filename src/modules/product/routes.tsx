import { RouteObject } from 'react-router-dom';

import Product from './screens/Product';

export enum ProductRouteEnum {
  PRODUCT = '/product',
}

export const productScreens: RouteObject[] = [
  {
    path: ProductRouteEnum.PRODUCT,
    element: <Product />,
  },
];
