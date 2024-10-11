import { useDispatch } from 'react-redux';

import { CategoryType } from '../../../shared/types/CategoryType';
import { useAppSelector } from '../../hooks';
import { setCategoriesAction } from '.';

export const useCategoryReducer = () => {
  const dispatch = useDispatch();
  const { categories } = useAppSelector((state) => state.categoryReducer);

  const setCategories = (data: CategoryType[]) => {
    dispatch(setCategoriesAction(data));
  };

  return {
    categories,
    setCategories,
  };
};
