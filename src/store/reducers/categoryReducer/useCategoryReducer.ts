import { useDispatch } from 'react-redux';

import { CategoryType } from '../../../shared/types/CategoryType';
import { ResponseDataType } from '../../../shared/types/ResponseDataType';
import { useAppSelector } from '../../hooks';
import { setCategoriesAction, setCategoryAction } from '.';

export const useCategoryReducer = () => {
  const dispatch = useDispatch();
  const { categories } = useAppSelector((state) => state.categoryReducer);
  const { category } = useAppSelector((state) => state.categoryReducer);

  const setCategories = ({ data }: ResponseDataType) => {
    dispatch(setCategoriesAction(data as CategoryType[]));
  };

  const setCategory = (data?: CategoryType) => {
    dispatch(setCategoryAction(data));
  };

  return {
    categories,
    setCategories,
    category,
    setCategory,
  };
};
