import { RouteObject } from 'react-router-dom';

import User from './screens/User';
import UserInsert from './screens/UserInsert';

export enum UserRouteEnum {
  USER = '/user',
  USER_INSERT = '/user/insert',
}

export const userScreens: RouteObject[] = [
  {
    path: UserRouteEnum.USER,
    element: <User />,
  },
  {
    path: UserRouteEnum.USER_INSERT,
    element: <UserInsert />,
  },
];
