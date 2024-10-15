import { RouteObject } from 'react-router-dom';

import Order from './screens/Order';

export enum OrderRouteEnum {
  ORDER = '/order',
  ORDER_INSERT = '/order/insert',
}

export const orderScreens: RouteObject[] = [
  {
    path: OrderRouteEnum.ORDER,
    element: <Order />,
  },
  {
    path: OrderRouteEnum.ORDER_INSERT,
    element: <Order />,
  },
];
