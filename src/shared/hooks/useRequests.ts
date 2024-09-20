import axios from 'axios';
import { useState } from 'react';

import { connectionAPIGet, connectionAPIPost } from '../functions/connections/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

  const getRequest = async (url: string) => {
    setLoading(true);

    const returnData = await connectionAPIGet(url).catch((error: Error) =>
      setNotification('error', error?.message, error?.message),
    );

    setLoading(false);

    return returnData;
  };

  const postRequest = async (url: string, body: unknown) => {
    setLoading(true);

    const returnData = await connectionAPIPost(url, body).catch((error: Error) =>
      setNotification('error', error?.message, error?.message),
    );

    setLoading(false);

    return returnData;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
