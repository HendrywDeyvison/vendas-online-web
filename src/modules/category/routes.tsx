import { RouteObject } from 'react-router-dom';

import Category from './screens/Category';
import CategoryInsert from './screens/CategoryInsert';

export enum CategoryRouteEnum {
  CATEGORY = '/category',
  CATEGORY_INSERT = '/category/insert',
}

export const categoryScreens: RouteObject[] = [
  {
    path: CategoryRouteEnum.CATEGORY,
    element: <Category />,
  },
  {
    path: CategoryRouteEnum.CATEGORY_INSERT,
    element: <CategoryInsert />,
  },
];
