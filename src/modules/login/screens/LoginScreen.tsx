import { useState } from 'react';

import Button from '../../../shared/components/buttons/button/button';
import SVGLogo from '../../../shared/components/icons/SVGLogo';
import Input from '../../../shared/components/inputs/input/input';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import {
  BackgroundImage,
  ContainerContentLogin,
  ContainerLogin,
  ContainerLoginScreen,
  TitleLogin,
} from '../styles/loginScreen.styles';
import { UserType } from '../types/UserType';

const LoginScreen = () => {
  const { accessToken, setAccessToken, setNotification } = useGlobalContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { postRequest, loading } = useRequests();

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const user = await postRequest<UserType>('http://localhost:8080/auth', {
      email: email,
      password: password,
    });

    if (user) {
      setAccessToken(user?.accessToken);
      setNotification('success', 'Login success, please await...');
    }
  };

  return (
    <div>
      <ContainerLoginScreen>
        <BackgroundImage src="/background.png" />
        <ContainerLogin>
          <ContainerContentLogin>
            <SVGLogo />
            <TitleLogin level={1}>LOGIN</TitleLogin>
            <Input label="USUÁRIO:" margin="32px 0px 0px" onChange={handleUsername} value={email} />
            <Input
              type="password"
              label="SENHA:"
              margin="15px 0px 0px"
              onChange={handlePassword}
              value={password}
            />
            <Button
              loading={loading}
              type="primary"
              margin="64px 0px 16px 0px"
              onClick={handleLogin}
            >
              ENTRAR
            </Button>
          </ContainerContentLogin>
        </ContainerLogin>
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
