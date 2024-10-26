import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER_ADMIN } from '../../../shared/constants/urls';
import { InsertUserDto } from '../../../shared/dtos/insertUser.dto';
import { connectionAPIPost } from '../../../shared/functions/connections/connectionAPI';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { UserRouteEnum } from '../routes';

export const useInsertUser = () => {
  const navigate = useNavigate();
  const { setNotification } = useGlobalReducer();
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [user, setUser] = useState<InsertUserDto>({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    password: '',
  });

  useEffect(() => {
    if (user.name && user.email && user.phone && user.cpf && user.password) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [user]);

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameObject: string,
    isNumber?: boolean,
  ) => {
    setUser({
      ...user,
      [nameObject]: isNumber ? Number(event.target.value) : event.target.value,
    });
  };

  /*const handleChangeSelect = (value: string) => {
    setUser({ ...user, typeUser: Number(value) });
  };*/

  const handleOnClickInsert = async () => {
    setLoading(true);

    await connectionAPIPost(URL_USER_ADMIN, user).catch((error: Error) => {
      setNotification('error', 'Erro ao tentar inserir um novo produto', error.message);
    });

    setLoading(false);

    setNotification('success', 'Sucesso!', 'Usuário inserido com sucesso!');
    navigate(UserRouteEnum.USER);
  };

  return {
    user,
    loading,
    disabledButton,
    onChangeInput,
    handleOnClickInsert,
  };
};
