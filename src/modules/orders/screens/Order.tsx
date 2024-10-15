import { GetProps, Input, TableProps } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyBetween } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limitedConteiner.style';
import Table from '../../../shared/components/table/Table';
import { URL_ORDER_ALL } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { OrderType } from '../../../shared/types/OrderType';
import { useOrderReducer } from '../../../store/reducers/orderReducer/useOrderReducer';
import { OrderRouteEnum } from '../routes';

const listBreadcrumb = [
  {
    title: 'Home',
  },
  {
    title: 'PEDIDOS',
  },
];

const columns: TableProps<OrderType>['columns'] = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
    sorter: (a, b) => a.date.localeCompare(b.date),
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Usuário',
    dataIndex: 'user',
    key: 'user',
    sorter: (a, b) => a.user.name.localeCompare(b.user.name),
    render: (_, data) => <a>{data.user.name}</a>,
  },
  {
    title: 'Qtd. Produtos',
    dataIndex: 'amountProducts',
    key: 'amountProducts',
    sorter: (a, b) => (a?.amountProducts || 0) - (b?.amountProducts || 0),
    render: (text) => <a>{text || 0}</a>,
  },
];

const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;

const Order = () => {
  const { orders, setOrders } = useOrderReducer();
  const [ordersFiltered, setOrdersFiltered] = useState<OrderType[]>();
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    setOrdersFiltered(orders);
  }, [orders]);

  useEffect(() => {
    request(URL_ORDER_ALL, MethodsEnum.GET, setOrders);
  }, []);

  const handleOnClickInsert = () => {
    navigate(OrderRouteEnum.ORDER_INSERT);
  };

  const onSearch: SearchProps['onSearch'] = (value: string) => {
    if (value.length) {
      setOrdersFiltered(
        orders?.filter((order) => order.user.name.toLowerCase().includes(value.toLowerCase())),
      );
    } else {
      setOrdersFiltered([...orders]);
    }
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexJustifyBetween margin="0px 0px 16px 0px">
        <LimitedContainer width={'240px'}>
          <Search placeholder="Buscar categoria" onSearch={onSearch} enterButton />
        </LimitedContainer>

        <LimitedContainer width={'120px'}>
          <Button type="primary" onClick={handleOnClickInsert}>
            Inserir
          </Button>
        </LimitedContainer>
      </DisplayFlexJustifyBetween>

      <Table columns={columns} dataSource={ordersFiltered} />
    </Screen>
  );
};

export default Order;
