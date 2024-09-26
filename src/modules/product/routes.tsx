import { RouteObject } from 'react-router-dom';

import Product from './screens/Product';
import ProductInsert from './screens/ProductInsert';

export enum ProductRouteEnum {
  PRODUCT = '/product',
  PRODUCT_INSERT = '/product/insert',
}

export const productScreens: RouteObject[] = [
  {
    path: ProductRouteEnum.PRODUCT,
    element: <Product />,
  },
  {
    path: ProductRouteEnum.PRODUCT_INSERT,
    element: <ProductInsert />,
  },
];
