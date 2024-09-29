import { useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { FirstScreenRouteEnum } from '../../modules/firstScreen/routes';
import { AuthType } from '../../modules/login/types/AuthType';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connections/auth';
import ConnectionAPI, {
  connectionAPIPost,
  MethodType,
} from '../functions/connections/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification, setUser } = useGlobalContext();

  const request = async <T>(
    url: string,
    method: MethodType,
    saveGlobal?: (object: T) => void,
    body?: unknown,
  ): Promise<T | undefined> => {
    setLoading(true);

    const returnObject: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        return result;
      })
      .catch((error: Error) => {
        setNotification('error', error?.message, error?.message);

        return undefined;
      });

    setLoading(false);

    return returnObject;
  };

  const authRequest = async (navigate: NavigateFunction, body: unknown): Promise<void> => {
    setLoading(true);

    await connectionAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setNotification('success', 'Login success, please await...');
        setUser(result.user);
        setAuthorizationToken(result.accessToken);
        navigate(FirstScreenRouteEnum.FIRST_SCREEN);
        return result;
      })
      .catch((error: Error) => {
        setNotification('error', error?.message, error?.message);

        return undefined;
      });

    setLoading(false);
  };

  return {
    loading,
    authRequest,
    request,
  };
};
