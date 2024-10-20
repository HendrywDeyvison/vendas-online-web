import { Descriptions, DescriptionsProps } from 'antd';

import { AddressType } from '../../../shared/types/AddressType';

interface DescriptionAddressOrderDetailProps {
  addressData?: AddressType;
  title: string;
}
const DescriptionAddressOrderDetail = ({
  addressData,
  title,
}: DescriptionAddressOrderDetailProps) => {
  if (!addressData) {
    return null;
  }

  const itemsUser: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Cidade',
      children: addressData.city?.name,
      span: 2,
    },
    {
      key: '2',
      label: 'Estado',
      children: addressData.city?.state?.name,
    },
    {
      key: '3',
      label: 'Complemento',
      children: addressData.complement,
      span: 2,
    },
    {
      key: '4',
      label: 'Nº Endereço',
      children: addressData.numberAddress,
    },
    {
      key: '5',
      label: 'CEP',
      children: addressData.cep,
      span: 2,
    },
  ];

  return <Descriptions title={title} bordered items={itemsUser} />;
};

export default DescriptionAddressOrderDetail;
