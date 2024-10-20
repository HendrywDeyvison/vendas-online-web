import { Descriptions, DescriptionsProps } from 'antd';

import { convertNumberToMoney } from '../../../shared/functions/currency';
import { PaymentType } from '../../../shared/types/PaymentType';

interface DescriptionPaymentOrderDetailProps {
  paymentData?: PaymentType;
  title: string;
}
const DescriptionPaymentOrderDetail = ({
  paymentData,
  title,
}: DescriptionPaymentOrderDetailProps) => {
  if (!paymentData) {
    return null;
  }

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Preço(R$)',
      children: convertNumberToMoney(paymentData.price),
    },
    {
      key: '2',
      label: 'Desconto(R$)',
      children: convertNumberToMoney(paymentData.discount),
      span: 2,
    },
    {
      key: '3',
      label: 'Preço Final(R$)',
      children: convertNumberToMoney(paymentData.finalPrice),
    },
    {
      key: '4',
      label: 'Tipo Pagamento',
      children: paymentData?.type,
      span: 2,
    },
    {
      key: '5',
      label: 'Status',
      children: paymentData?.paymentStatus?.name,
    },
  ];

  return <Descriptions title={title} bordered items={items} />;
};

export default DescriptionPaymentOrderDetail;
