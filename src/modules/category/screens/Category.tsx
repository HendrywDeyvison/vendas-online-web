import { GetProps, Input, TableProps } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyBetween } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limitedConteiner.style';
import Table from '../../../shared/components/table/Table';
import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategory } from '../hooks/useCategory';
import { CategoryRouteEnum } from '../routes';

const listBreadcrumb = [
  {
    title: 'Home',
  },
  {
    title: 'CATEGORIAS',
  },
];

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
];

const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;

const Category = () => {
  const { setCategories } = useDataContext();
  const { categories } = useCategory();
  const [categoriesFiltered, setCategoriesFiltered] = useState<CategoryType[]>();
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    setCategoriesFiltered(categories);
  }, [categories]);

  useEffect(() => {
    request(URL_CATEGORY, MethodsEnum.GET, setCategories);
  }, []);

  const handleOnClickInsert = () => {
    navigate(CategoryRouteEnum.CATEGORY_INSERT);
  };

  const onSearch: SearchProps['onSearch'] = (value: string) => {
    if (value.length) {
      setCategoriesFiltered(
        categories?.filter((category) => category.name.toLowerCase().includes(value.toLowerCase())),
      );
    } else {
      setCategoriesFiltered([...categories]);
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

      <Table columns={columns} dataSource={categoriesFiltered} />
    </Screen>
  );
};

export default Category;
