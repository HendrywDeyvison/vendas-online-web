import { Divider, Spin } from 'antd';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyCenter } from '../../../shared/components/styles/display.style';
import { URL_ORDER_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useOrderReducer } from '../../../store/reducers/orderReducer/useOrderReducer';
import DescriptionAddressOrderDetail from '../components/DescriptionAddressOrderDetail';
import DescriptionPaymentOrderDetail from '../components/DescriptionPaymentOrderDetail';
import DescriptionProductOrderDetail from '../components/DescriptionProductOrderDetail';
import DescriptionUserOrderDetail from '../components/DescriptionUserOrderDetail';
import { OrderRouteEnum } from '../routes';

const OrderDetail = () => {
  const { order, setOrder } = useOrderReducer();
  const { request, loading } = useRequests();
  const { orderId } = useParams<{ orderId: string }>();

  useEffect(() => {
    request(URL_ORDER_ID.replace('{orderId}', orderId || ''), MethodsEnum.GET, setOrder);
  }, []);

  const listBreadcrumb = [
    {
      title: 'HOME',
    },
    {
      title: 'PEDIDOS',
      navigateTo: OrderRouteEnum.ORDER,
    },
    {
      title: 'DETALHES',
    },
  ];

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      {!order || loading ? (
        <DisplayFlexJustifyCenter>
          <Spin tip="Loading" size="large" />
        </DisplayFlexJustifyCenter>
      ) : (
        <>
          <DescriptionUserOrderDetail title="Dados do Usuário" userData={order[0].user} />
          <Divider />
          <DescriptionPaymentOrderDetail
            title="Dados do Pagamento"
            paymentData={order[0].payment}
          />
          <Divider />
          <DescriptionAddressOrderDetail title="Dados do Endereço" addressData={order[0].address} />
          <Divider />
          <DescriptionProductOrderDetail
            title="Lista de Produtos"
            productsData={order[0].ordersProduct}
          />
        </>
      )}
    </Screen>
  );
};

export default OrderDetail;
