import { useDispatch } from 'react-redux';

import { OrderType } from '../../../shared/types/OrderType';
import { ResponseDataType } from '../../../shared/types/ResponseDataType';
import { useAppSelector } from '../../hooks';
import { setOrderAction, setOrdersAction } from '.';

export const useOrderReducer = () => {
  const dispatch = useDispatch();
  const { orders, order } = useAppSelector((state) => state.orderReducer);

  const setOrders = ({ data }: ResponseDataType) => {
    dispatch(setOrdersAction(data as OrderType[]));
  };

  const setOrder = (order: OrderType[]) => {
    dispatch(setOrderAction(order));
  };

  return {
    orders,
    setOrders,
    order,
    setOrder,
  };
};
