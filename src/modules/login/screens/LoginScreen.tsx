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
  return (
    <div>
      <BackgroundImage src="/background.png" />
      <ContainerLoginScreen>
        <ContainerLogin>
          <ContainerContentLogin>
            <LogoImage src="/react.svg" />
            <TitleLogin level={2}>LOGIN</TitleLogin>
            <Input label="USUÁRIO:" />
            <Input label="SENHA:" />
            <Button type="primary" margin="64px 0px 16px 0px">
              ENTRAR
            </Button>
          </ContainerContentLogin>
        </ContainerLogin>
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
