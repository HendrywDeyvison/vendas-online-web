import { useDispatch } from 'react-redux';

import { CategoryType } from '../../../shared/types/CategoryType';
import { ResponseDataType } from '../../../shared/types/ResponseDataType';
import { useAppSelector } from '../../hooks';
import { setCategoriesAction } from '.';

export const useCategoryReducer = () => {
  const dispatch = useDispatch();
  const { categories } = useAppSelector((state) => state.categoryReducer);

  const setCategories = ({ data }: ResponseDataType) => {
    dispatch(setCategoriesAction(data as CategoryType[]));
  };

  return {
    categories,
    setCategories,
  };
};
