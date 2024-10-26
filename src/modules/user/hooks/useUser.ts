import { SearchProps } from 'antd/es/input';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER_ALL } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';
import { UserType } from '../../login/types/UserType';
import { UserRouteEnum } from '../routes';

export const useUser = () => {
  const { users, setUsers } = useUserReducer();
  const [usersFiltered, setUsersFiltered] = useState<UserType[]>();
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    request(URL_USER_ALL, MethodsEnum.GET, setUsers);
  }, []);

  useEffect(() => {
    setUsersFiltered(users);
  }, [users]);

  const handleOnClickInsert = () => {
    navigate(UserRouteEnum.USER_INSERT);
  };

  const onSearch: SearchProps['onSearch'] = (value: string) => {
    if (value.length) {
      setUsersFiltered(
        users?.filter((user) => user.name.toLowerCase().includes(value.toLowerCase())),
      );
    } else {
      setUsersFiltered([...users]);
    }
  };

  return {
    usersFiltered,
    handleOnClickInsert,
    onSearch,
  };
};
