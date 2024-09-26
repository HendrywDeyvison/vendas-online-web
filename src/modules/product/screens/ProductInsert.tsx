import Screen from '../../../shared/components/screen/Screen';
import { ProductRouteEnum } from '../routes';

const ProductInsert = () => {
  const listBreadcrumb = [
    {
      title: 'Home',
    },
    {
      title: 'PRODUTOS',
      navigateTo: ProductRouteEnum.PRODUCT,
    },
    {
      title: 'INSERIR PRODUTO',
    },
  ];

  return <Screen listBreadcrumb={listBreadcrumb}> INSERT PRODUCT</Screen>;
};

export default ProductInsert;
