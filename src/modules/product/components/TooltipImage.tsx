import Tooltip from '../../../shared/components/tooltip/Tooltip';
import { ProductType } from '../../../shared/types/ProductType';
import { ImageProduct } from '../styles/tooltipImage.style';

interface TooltipProps {
  product: ProductType;
}

const TooltipImage = ({ product }: TooltipProps) => {
  return (
    <Tooltip tooltip={<ImageProduct src={product.image} />}>
      <span>{product.id}</span>
    </Tooltip>
  );
};

export default TooltipImage;
