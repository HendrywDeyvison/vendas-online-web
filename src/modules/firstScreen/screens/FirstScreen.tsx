import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { ProductRouteEnum } from '../../product/routes';

const FirstScreen = () => {
  const navigate = useNavigate();
  const { user } = useGlobalContext();

  useEffect(() => {
    if (user) {
      navigate(ProductRouteEnum.PRODUCT);
    }
  }, [user]);

  return <Spin spinning={true} />;
};

export default FirstScreen;
