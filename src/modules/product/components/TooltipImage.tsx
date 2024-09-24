import { Tooltip } from 'antd';

import { ProductType } from '../../../shared/types/ProductType';

interface TooltipProps {
  product: ProductType;
}

const TooltipImage = ({ product }: TooltipProps) => {
  return (
    <Tooltip title={product.name}>
      <span>{product.id}</span>
    </Tooltip>
  );
};

export default TooltipImage;
