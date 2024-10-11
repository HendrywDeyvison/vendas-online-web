import { notification as notificationAntd } from 'antd';
import { useEffect } from 'react';

import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';

export const useNotification = () => {
  const [api, contextHolder] = notificationAntd.useNotification();
  const { notification } = useGlobalReducer();

  useEffect(() => {
    if (notification?.type && notification?.message) {
      api[notification?.type]({
        message: notification?.message,
        description: notification?.description,
        placement: 'bottomRight',
      });
    }
  }, [notification]);

  return {
    contextHolder,
  };
};
