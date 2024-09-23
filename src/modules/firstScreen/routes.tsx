import { RouteObject } from 'react-router-dom';

import FirstScreen from './screens/FirstScreen';

export enum FirstScreenRouteEnum {
  FIRST_SCREEN = '/',
}

export const firstScreenRoutes: RouteObject[] = [
  {
    path: FirstScreenRouteEnum.FIRST_SCREEN,
    element: <FirstScreen />,
    errorElement: <div>Page Not Found</div>,
  },
];
