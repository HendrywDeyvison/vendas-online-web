import { useDispatch } from 'react-redux';

import { ProductType } from '../../../shared/types/ProductType';
import { ResponseDataType } from '../../../shared/types/ResponseDataType';
import { useAppSelector } from '../../hooks';
import { setProductAction, setProductsAction } from '.';

export const useProductReducer = () => {
  const dispatch = useDispatch();
  const { products } = useAppSelector((state) => state.productReducer);
  const { product } = useAppSelector((state) => state.productReducer);

  const setProducts = ({ data }: ResponseDataType) => {
    dispatch(setProductsAction(data as ProductType[]));
  };

  const setProduct = (data?: ProductType) => {
    dispatch(setProductAction(data));
  };

  return {
    products,
    setProducts,
    product,
    setProduct,
  };
};
