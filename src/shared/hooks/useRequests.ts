import { useState } from 'react';

import { connectionAPIGet, connectionAPIPost } from '../functions/connections/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

  const getRequest = async <T>(url: string): Promise<T | undefined> => {
    setLoading(true);

    const returnData = await connectionAPIGet<T>(url).catch((error: Error) => {
      setNotification('error', error?.message, error?.message);

      return undefined;
    });

    setLoading(false);

    return returnData;
  };

  const postRequest = async <T>(url: string, body: unknown): Promise<T | undefined> => {
    setLoading(true);

    const returnData = await connectionAPIPost<T>(url, body).catch((error: Error) => {
      setNotification('error', error?.message, error?.message);

      return undefined;
    });

    setLoading(false);

    return returnData;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
