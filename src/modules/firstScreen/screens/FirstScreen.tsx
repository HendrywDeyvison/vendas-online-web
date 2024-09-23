import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuthorizationToken } from '../../../shared/functions/connections/auth';

const FirstScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAuthorizationToken();
    if (token) {
      navigate('/product');
    } else {
      navigate('/login');
    }
  }, []);

  return <Spin spinning={true} />;
};

export default FirstScreen;
