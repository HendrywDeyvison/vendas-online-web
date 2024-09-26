import type { TableProps } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/button';
import Screen from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { convertNumberToMoney } from '../../../shared/functions/currency';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductType } from '../../../shared/types/ProductType';
import CategoryColumn from '../components/CategoryColumn';
import TooltipImage from '../components/TooltipImage';
import { ProductRouteEnum } from '../routes';

const columns: TableProps<ProductType>['columns'] = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (_, product) => <TooltipImage product={product} />,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category',
    render: (_, product) => <CategoryColumn category={product.category} />,
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',
    render: (_, product) => <a>{convertNumberToMoney(product.price)}</a>,
  },
];

const Product = () => {
  const { products, setProducts } = useDataContext();
  const { request } = useRequests();
  const navigate = useNavigate();
  const loadProducts = async () => {
    request(URL_PRODUCT, MethodsEnum.GET, setProducts);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleOnClickInsert = () => {
    navigate(ProductRouteEnum.PRODUCT_INSERT);
  };

  const listBreadcrumb = [
    {
      title: 'Home',
    },
    {
      title: 'PRODUTOS',
    },
  ];

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <Button onClick={handleOnClickInsert}>Inserir</Button>
      <Table columns={columns} dataSource={products} />
    </Screen>
  );
};

export default Product;
