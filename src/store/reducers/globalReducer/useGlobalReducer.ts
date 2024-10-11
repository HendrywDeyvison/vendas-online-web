import { useDispatch } from 'react-redux';

import { NotificationTypeEnum } from '../../../shared/types/NotificationType';
import { useAppSelector } from '../../hooks';
import { UserType } from './../../../modules/login/types/UserType';
import { setNotificationAction, setUserAction } from '.';

export const useGlobalReducer = () => {
  const dispatch = useDispatch();
  const { user, notification } = useAppSelector((state) => state.globalReducer);

  const setNotification = (type: NotificationTypeEnum, message: string, description?: string) => {
    dispatch(setNotificationAction({ type, message, description }));
  };

  const setUser = (user: UserType) => {
    dispatch(setUserAction(user));
  };

  return {
    user,
    setUser,
    notification,
    setNotification,
  };
};
