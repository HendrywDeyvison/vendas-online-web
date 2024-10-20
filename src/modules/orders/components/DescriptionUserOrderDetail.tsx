import { Descriptions, DescriptionsProps } from 'antd';

import { UserType } from '../../login/types/UserType';

interface DescriptionUserOrderDetailProps {
  userData?: UserType;
  title: string;
}
const DescriptionUserOrderDetail = ({ userData, title }: DescriptionUserOrderDetailProps) => {
  if (!userData) {
    return null;
  }

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Nome',
      children: userData.name,
    },
    {
      key: '2',
      label: 'CPF',
      children: userData.cpf,
      span: 2,
    },
    {
      key: '3',
      label: 'Telefone',
      children: userData.phone,
    },
    {
      key: '4',
      label: 'Email',
      children: userData.email,
      span: 2,
    },
  ];

  return <Descriptions title={title} bordered items={items} />;
};

export default DescriptionUserOrderDetail;
