import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limitedConteiner.style';
import { useInsertUser } from '../hooks/useInsertUser';
import { UserRouteEnum } from '../routes';

const UserInsert = () => {
  const navigate = useNavigate();
  const { user, loading, disabledButton, onChangeInput, handleOnClickInsert } = useInsertUser();

  const listBreadcrumb = [
    {
      title: 'HOME',
    },
    {
      title: 'CLIENTES',
      navigateTo: UserRouteEnum.USER,
    },
    {
      title: 'INSERIR CLIENTE',
    },
  ];

  /*const listOptions = categories.map((category) => {
    return {
      value: category.id,
      label: category.name,
    };
  });*/

  const handleOnClickCancel = () => {
    navigate(UserRouteEnum.USER);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexJustifyCenter>
        <LimitedContainer width="400px">
          <Input
            value={user?.name}
            label="Nome:"
            placeholder="Nome"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChangeInput(event, 'name')}
          />
          <Input
            value={user?.cpf}
            label="CPF:"
            placeholder="CPF"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChangeInput(event, 'cpf')}
          />
          <Input
            value={user?.phone}
            label="Telefone:"
            placeholder="Telefone"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChangeInput(event, 'phone')}
          />
          <Input
            value={user?.email}
            label="E-mail:"
            placeholder="E-mail"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChangeInput(event, 'email')}
          />
          <Input
            value={user?.password}
            label="Senha:"
            placeholder="Senha"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChangeInput(event, 'password')}
          />
          {/* <Select 
            label="Categoria:"
            margin={'0px 0px 32px 0px'}
            defaultValue="Selecione"
            onChange={handleChangeSelect}
            options={[...listOptions]}
          />*/}

          <DisplayFlexJustifyRight>
            <LimitedContainer width="120px" margin="0px 16px">
              <Button danger type="primary" onClick={handleOnClickCancel}>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width="120px">
              <Button
                loading={loading}
                disabled={disabledButton}
                type="primary"
                onClick={handleOnClickInsert}
              >
                Inserir Usuário
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default UserInsert;
