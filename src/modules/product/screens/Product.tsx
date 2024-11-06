import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Modal, TableProps } from 'antd';
import { useMemo } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlex,
  DisplayFlexJustifyBetween,
} from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limitedConteiner.style';
import Table from '../../../shared/components/table/Table';
import { convertNumberToMoney } from '../../../shared/functions/currency';
import { ProductType } from '../../../shared/types/ProductType';
import CategoryColumn from '../components/CategoryColumn';
import TooltipImage from '../components/TooltipImage';
import { useProduct } from '../hooks/useProduct';

const Product = () => {
  const {
    productsFiltered,
    onSearch,
    handleOnClickInsert,
    handleOnClickEdit,
    isModalOpen,
    showModal,
    handleOk,
    handleCancel,
  } = useProduct();

  const listBreadcrumb = [
    {
      title: 'HOME',
    },
    {
      title: 'PRODUTOS',
    },
  ];

  const columns: TableProps<ProductType>['columns'] = useMemo(
    () => [
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
      {
        title: 'Preço',
        dataIndex: 'price',
        key: 'price',
        sorter: (a, b) => a.price - b.price,
        render: (_, product) => <a>{convertNumberToMoney(product.price)}</a>,
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'action',
        render: (_, product) => (
          <LimitedContainer width="180px">
            <DisplayFlex>
              <Button
                margin="0px 16px 0px 0px"
                onClick={() => handleOnClickEdit(product.id)}
                icon={<EditOutlined />}
              >
                Editar
              </Button>
              <Button
                danger
                type="primary"
                onClick={() => showModal(product.id)}
                icon={<DeleteOutlined />}
              >
                Deletar
              </Button>
            </DisplayFlex>
          </LimitedContainer>
        ),
      },
    ],
    [],
  );

  const { Search } = Input;

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <Modal
        title="Atenção"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Sim, tenho certeza!"
        cancelText="Não!"
      >
        <p>Tem certeza que deseja deletar o produto?</p>
      </Modal>
      <DisplayFlexJustifyBetween margin="0px 0px 16px 0px">
        <LimitedContainer width={'240px'}>
          <Search placeholder="Buscar produto" onSearch={onSearch} enterButton />
        </LimitedContainer>

        <LimitedContainer width={'120px'}>
          <Button type="primary" onClick={handleOnClickInsert}>
            Inserir
          </Button>
        </LimitedContainer>
      </DisplayFlexJustifyBetween>

      <Table columns={columns} dataSource={productsFiltered} />
    </Screen>
  );
};

export default Product;
