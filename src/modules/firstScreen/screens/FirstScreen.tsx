import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER } from '../../../shared/constants/urls';
import {
  getAuthorizationToken,
  unsetAuthorizationToken,
} from '../../../shared/functions/connections/auth';
import { connectionAPIGet } from '../../../shared/functions/connections/connectionAPI';
import { LoginRouteEnum } from '../../login/routes';
import { ProductRouteEnum } from '../../product/routes';

const FirstScreen = () => {
  const navigate = useNavigate();

  const verifyToken = async () => {
    const token = getAuthorizationToken();

    if (token) {
      await connectionAPIGet(URL_USER)
        .then(() => {
          navigate(ProductRouteEnum.PRODUCT);
        })
        .catch(() => {
          unsetAuthorizationToken();
          navigate(LoginRouteEnum.LOGIN);
        });
    } else {
      navigate(LoginRouteEnum.LOGIN);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return <Spin spinning={true} />;
};

export default FirstScreen;
