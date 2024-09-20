import { notification as notificationAntd } from 'antd';
import { useEffect } from 'react';

import { useGlobalContext } from './useGlobalContext';

export const useNotification = () => {
  const [api, contextHolder] = notificationAntd.useNotification();
  const { notification } = useGlobalContext();

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
