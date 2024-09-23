import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthType } from '../../modules/login/types/AuthType';
import { ProductRouteEnum } from '../../modules/product/routes';
import { ERROR_INVALID_PASSWORD } from '../constants/errosStatus';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connections/auth';
import { connectionAPIGet, connectionAPIPost } from '../functions/connections/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();
  const navigate = useNavigate();

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

  const authRequest = async (body: unknown): Promise<void> => {
    setLoading(true);

    await connectionAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setNotification('success', 'Login success, please await...');
        setAuthorizationToken(result.accessToken);
        navigate(ProductRouteEnum.PRODUCT);
        return result;
      })
      .catch((error: Error) => {
        setNotification('error', ERROR_INVALID_PASSWORD, error?.message);

        return undefined;
      });

    setLoading(false);
  };

  return {
    loading,
    authRequest,
    getRequest,
    postRequest,
  };
};
