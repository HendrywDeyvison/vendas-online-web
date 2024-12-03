import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Modal, TableProps } from 'antd';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlex,
  DisplayFlexJustifyBetween,
} from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limitedConteiner.style';
import Table from '../../../shared/components/table/Table';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategory } from '../hooks/useCategory';

const listBreadcrumb = [
  {
    title: 'HOME',
  },
  {
    title: 'CATEGORIAS',
  },
];

const { Search } = Input;

const Category = () => {
  const {
    categoriesFiltered,
    categoryName,
    handleOnClickInsert,
    onSearch,
    handleOnClickEdit,
    showModal,
    isModalOpen,
    handleOk,
    handleCancel,
  } = useCategory();

  const columns: TableProps<CategoryType>['columns'] = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Qtd. Produtos',
      dataIndex: 'amountProducts',
      key: 'amountProducts',
      sorter: (a, b) => a.amountProducts - b.amountProducts,
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'action',
      render: (_, category) => (
        <LimitedContainer width="180px">
          <DisplayFlex>
            <LimitedContainer width="90px" margin="0px 16px 0px 0px">
              <Button onClick={() => handleOnClickEdit(category.id)} icon={<EditOutlined />}>
                Editar
              </Button>
            </LimitedContainer>
            <LimitedContainer width="90px">
              {category?.amountProducts <= 0 && (
                <Button
                  danger
                  type="primary"
                  onClick={() => showModal(category.id, category.name)}
                  icon={<DeleteOutlined />}
                >
                  Deletar
                </Button>
              )}
            </LimitedContainer>
          </DisplayFlex>
        </LimitedContainer>
      ),
    },
  ];

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
        <p>
          Tem certeza que deseja deletar a categoria: <strong>{categoryName}</strong>?
        </p>
      </Modal>
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

      <Table columns={columns} dataSource={categoriesFiltered} />
    </Screen>
  );
};

export default Category;
