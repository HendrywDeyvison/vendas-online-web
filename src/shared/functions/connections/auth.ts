import { NavigateFunction, redirect } from 'react-router-dom';

import { LoginRouteEnum } from '../../../modules/login/routes';
import { UserType } from '../../../modules/login/types/UserType';
import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { URL_USER } from '../../constants/urls';
import { UserTokenType } from '../../types/UserTokenType';
import { connectionAPIGet } from './connectionAPI';
import { getItemStorage, removeItemStorage, setItemStorage } from './storageProxy';

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
  if (token) setItemStorage(AUTHORIZATION_KEY, token);
};

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const getUserInfoByToken = (): UserTokenType | undefined => {
  const token = getAuthorizationToken();
  const tokenSplited = token?.split('.');

  if (tokenSplited && tokenSplited?.length > 1) {
    return JSON.parse(window.atob(tokenSplited[1]));
  }

  return undefined;
};

export const verifyLoggedIn = async () => {
  const token = getAuthorizationToken();

  if (!token) {
    unsetAuthorizationToken();
    return redirect(LoginRouteEnum.LOGIN);
  }

  const user = await connectionAPIGet<UserType>(URL_USER).catch(() => {
    unsetAuthorizationToken();
  });

  if (!user) {
    return redirect(LoginRouteEnum.LOGIN);
  }

  return null;
};

export const logOut = (navigate: NavigateFunction) => {
  unsetAuthorizationToken();
  navigate(LoginRouteEnum.LOGIN);
};
