import { RouteObject } from 'react-router-dom';

import Category from './screens/Category';
import CategoryEdit from './screens/CategoryEdit';
import CategoryInsert from './screens/CategoryInsert';

export enum CategoryRouteEnum {
  CATEGORY = '/category',
  CATEGORY_INSERT = '/category/insert',
  CATEGORY_EDIT = '/category/:categoryId',
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
  {
    path: CategoryRouteEnum.CATEGORY_EDIT,
    element: <CategoryEdit />,
  },
];
