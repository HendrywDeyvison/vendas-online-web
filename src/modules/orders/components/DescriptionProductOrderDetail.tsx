import { Descriptions } from 'antd';

import { OrderProductType } from '../../../shared/types/OrderProduct';
import ListOrderProduct from './ListOrderProduct';

interface DescriptionProductOrderDetailProps {
  productsData?: OrderProductType[];
  title: string;
}
const DescriptionProductOrderDetail = ({
  productsData,
  title,
}: DescriptionProductOrderDetailProps) => {
  if (!productsData) {
    return null;
  }

  return (
    <>
      <Descriptions title={title} bordered />
      <ListOrderProduct orderProduct={productsData} />
    </>
  );
};

export default DescriptionProductOrderDetail;
