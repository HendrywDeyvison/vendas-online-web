import { RouteObject } from 'react-router-dom';

import Order from './screens/Order';
import OrderDetail from './screens/OrderDetail';

export enum OrderRouteEnum {
  ORDER = '/order',
  ORDER_ID = '/order/:orderId',
  ORDER_INSERT = '/order/insert',
}

export const orderScreens: RouteObject[] = [
  {
    path: OrderRouteEnum.ORDER,
    element: <Order />,
  },
  {
    path: OrderRouteEnum.ORDER_ID,
    element: <OrderDetail />,
  },
  {
    path: OrderRouteEnum.ORDER_INSERT,
    element: <Order />,
  },
];
