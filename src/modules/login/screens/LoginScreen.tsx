import { useState } from 'react';

import Button from '../../../shared/buttons/button/button';
import Input from '../../../shared/inputs/input/input';
import {
  BackgroundImage,
  ContainerContentLogin,
  ContainerLogin,
  ContainerLoginScreen,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log(`username: ${username} , password: ${password}`);
  };

  return (
    <div>
      <BackgroundImage src="/background.png" />
      <ContainerLoginScreen>
        <ContainerLogin>
          <ContainerContentLogin>
            <LogoImage src="/react.svg" />
            <TitleLogin level={2}>LOGIN</TitleLogin>
            <Input
              label="USUÁRIO:"
              margin="32px 0px 0px"
              onChange={handleUsername}
              value={username}
            />
            <Input
              type="password"
              label="SENHA:"
              margin="15px 0px 0px"
              onChange={handlePassword}
              value={password}
            />
            <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
              ENTRAR
            </Button>
          </ContainerContentLogin>
        </ContainerLogin>
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
