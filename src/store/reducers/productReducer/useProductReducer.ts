import { useDispatch } from 'react-redux';

import { ProductType } from '../../../shared/types/ProductType';
import { ResponseDataType } from '../../../shared/types/ResponseDataType';
import { useAppSelector } from '../../hooks';
import { setProductsAction } from '.';

export const useProductReducer = () => {
  const dispatch = useDispatch();
  const { products } = useAppSelector((state) => state.productReducer);

  const setProducts = ({ data }: ResponseDataType) => {
    dispatch(setProductsAction(data as ProductType[]));
  };

  return {
    products,
    setProducts,
  };
};
