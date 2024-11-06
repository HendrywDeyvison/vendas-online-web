import { RouteObject } from 'react-router-dom';

import Product from './screens/Product';
import ProductEdit from './screens/ProductEdit';
import ProductInsert from './screens/ProductInsert';

export enum ProductRouteEnum {
  PRODUCT = '/product',
  PRODUCT_INSERT = '/product/insert',
  PRODUCT_EDIT = '/product/:productId',
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
  {
    path: ProductRouteEnum.PRODUCT_EDIT,
    element: <ProductEdit />,
  },
];
