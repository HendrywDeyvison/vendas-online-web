import axios from 'axios';
import { useState } from 'react';

import Button from '../../../shared/components/buttons/button/button';
import SVGLogo from '../../../shared/components/icons/SVGLogo';
import Input from '../../../shared/components/inputs/input/input';
import {
  BackgroundImage,
  ContainerContentLogin,
  ContainerLogin,
  ContainerLoginScreen,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const resp = await axios({
      method: 'post',
      url: 'http://localhost:8080/auth',
      data: {
        email: email,
        password: password,
      },
    }).catch((error) => {
      console.log(error);
    });

    console.log(resp?.data);
  };

  return (
    <div>
      <BackgroundImage src="/background.png" />
      <ContainerLoginScreen>
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
