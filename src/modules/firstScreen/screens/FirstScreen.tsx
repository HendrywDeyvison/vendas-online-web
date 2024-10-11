import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { ProductRouteEnum } from '../../product/routes';

const FirstScreen = () => {
  const navigate = useNavigate();
  const { user } = useGlobalReducer();

  useEffect(() => {
    if (user) {
      navigate(ProductRouteEnum.PRODUCT);
    }
  }, [user]);

  return <Spin spinning={true} />;
};

export default FirstScreen;
