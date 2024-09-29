import { GetProps, Input, TableProps } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
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
import { BoxButtons, LimiteSizeButton, LimiteSizeInput } from '../styles/product.style';

const listBreadcrumb = [
  {
    title: 'Home',
  },
  {
    title: 'PRODUTOS',
  },
];

const columns: TableProps<ProductType>['columns'] = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => a.id - b.id,
    render: (_, product) => <TooltipImage product={product} />,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category',
    sorter: (a, b) => a.category.name.localeCompare(b.category.name),
    render: (_, product) => <CategoryColumn category={product.category} />,
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price,
    render: (_, product) => <a>{convertNumberToMoney(product.price)}</a>,
  },
];

const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;

const Product = () => {
  const { products, setProducts } = useDataContext();
  const [productsFiltered, setProductsFiltered] = useState<ProductType[]>();
  const { request } = useRequests();
  const navigate = useNavigate();
  const loadProducts = async () => {
    request(URL_PRODUCT, MethodsEnum.GET, setProducts);
  };

  useEffect(() => {
    setProductsFiltered(products);
  }, [products]);

  useEffect(() => {
    loadProducts();
  }, []);

  const handleOnClickInsert = () => {
    navigate(ProductRouteEnum.PRODUCT_INSERT);
  };

  const onSearch: SearchProps['onSearch'] = (value: string) => {
    if (value.length) {
      setProductsFiltered(
        products?.filter((product) => product.name.toLowerCase().includes(value.toLowerCase())),
      );
    } else {
      setProductsFiltered([...products]);
    }
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <BoxButtons>
        <LimiteSizeInput>
          <Search placeholder="Buscar produto" onSearch={onSearch} enterButton />
        </LimiteSizeInput>

        <LimiteSizeButton>
          <Button type="primary" onClick={handleOnClickInsert}>
            Inserir
          </Button>
        </LimiteSizeButton>
      </BoxButtons>

      <Table columns={columns} dataSource={productsFiltered} />
    </Screen>
  );
};

export default Product;
