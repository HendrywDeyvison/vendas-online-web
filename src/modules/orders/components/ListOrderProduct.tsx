import { TableProps } from 'antd';

import Table from '../../../shared/components/table/Table';
import { convertNumberToMoney } from '../../../shared/functions/currency';
import { OrderProductType } from '../../../shared/types/OrderProduct';
import CategoryColumn from '../../product/components/CategoryColumn';

interface ListOrderProductProps {
  orderProduct?: OrderProductType[];
}

const columns: TableProps<OrderProductType>['columns'] = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => {
      if (a.product?.name && b.product?.name) {
        return a.product?.name.localeCompare(b.product?.name);
      }
      return 0;
    },
    render: (_, target) => <a>{target.product?.name}</a>,
  },
  {
    title: 'Quantidade',
    dataIndex: 'amount',
    key: 'amount',
    sorter: (a, b) => a.amount - b.amount,
    render: (_, target) => <a>{target?.amount}</a>,
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price,
    render: (_, product) => <a>{convertNumberToMoney(product.price)}</a>,
  },
  {
    title: 'Total',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price * a.amount - b.price * b.amount,
    render: (_, target) => <a>{convertNumberToMoney(target.price * target.amount)}</a>,
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category',
    sorter: (a, b) => {
      if (a.product?.category && b.product?.category) {
        return a.product?.category.name.localeCompare(b.product?.category.name);
      }
      return 0;
    },
    render: (_, target) => <CategoryColumn category={target?.product?.category} />,
  },
];

const ListOrderProduct = ({ orderProduct }: ListOrderProductProps) => {
  if (!orderProduct || orderProduct?.length <= 0) {
    return null;
  }

  return <Table columns={columns} dataSource={orderProduct} />;
};

export default ListOrderProduct;
