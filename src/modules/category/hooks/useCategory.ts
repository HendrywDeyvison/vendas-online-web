import { useEffect } from 'react';

import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { URL_CATEGORY } from './../../../shared/constants/urls';

export const useCategory = () => {
  const { categories, setCategories } = useCategoryReducer();
  const { request } = useRequests();

  useEffect(() => {
    if (categories?.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, [categories]);

  return {
    categories,
  };
};
