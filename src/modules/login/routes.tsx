import { RouteObject } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';

export enum LoginRouteEnum {
  LOGIN = '/login',
}

export const loginRoutes: RouteObject[] = [
  {
    path: LoginRouteEnum.LOGIN,
    element: <LoginScreen />,
    errorElement: <div>Page Not Found</div>,
  },
];
