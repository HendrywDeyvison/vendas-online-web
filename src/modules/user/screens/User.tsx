import { Input, TableProps } from 'antd';
import { useMemo } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyBetween } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limitedConteiner.style';
import Table from '../../../shared/components/table/Table';
import { UserTypeEnum } from '../../../shared/enums/userType.enum';
import { getUserInfoByToken } from '../../../shared/functions/connections/auth';
import { UserType } from '../../login/types/UserType';
import { useUser } from '../hooks/useUser';

const User = () => {
  const { usersFiltered, onSearch, handleOnClickInsert } = useUser();

  const userToken = useMemo(() => getUserInfoByToken(), []);

  const listBreadcrumb = [
    {
      title: 'HOME',
    },
    {
      title: 'USUÁRIOS',
    },
  ];

  const columns: TableProps<UserType>['columns'] = useMemo(
    () => [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'CPF',
        dataIndex: 'cpf',
        key: 'cpf',
        sorter: (a, b) => a.cpf.localeCompare(b.cpf),
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Telefone',
        dataIndex: 'phone',
        key: 'phone',
        sorter: (a, b) => a.phone.localeCompare(b.phone),
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'E-mail',
        dataIndex: 'email',
        key: 'email',
        sorter: (a, b) => a.email.localeCompare(b.email),
        render: (text) => <a>{text}</a>,
      },
    ],
    [],
  );

  const { Search } = Input;

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexJustifyBetween margin="0px 0px 16px 0px">
        <LimitedContainer width={'240px'}>
          <Search placeholder="Buscar usuário" onSearch={onSearch} enterButton />
        </LimitedContainer>

        <LimitedContainer width={'120px'}>
          {userToken?.typeUser === UserTypeEnum.Root && (
            <Button type="primary" onClick={handleOnClickInsert}>
              Inserir Admin
            </Button>
          )}
        </LimitedContainer>
      </DisplayFlexJustifyBetween>

      <Table columns={columns} dataSource={usersFiltered} />
    </Screen>
  );
};

export default User;
