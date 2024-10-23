import { useDispatch } from 'react-redux';

import { UserType } from '../../../modules/login/types/UserType';
import { useAppSelector } from '../../hooks';
import { setUsersAction } from '.';

export const useUserReducer = () => {
  const dispatch = useDispatch();
  const { users } = useAppSelector((state) => state.userReducer);

  const setUsers = (data: UserType[]) => {
    dispatch(setUsersAction(data));
  };

  return {
    users,
    setUsers,
  };
};
