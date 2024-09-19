import Input from '../../../shared/inputs/input';
import {
  BackgroundImage,
  ContainerContentLogin,
  ContainerLogin,
  ContainerLoginScreen,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <div>
      <BackgroundImage src="/background.png" />
      <ContainerLoginScreen>
        <ContainerLogin>
          <ContainerContentLogin>
            <LogoImage src="/react.svg" />
            <Input label="USUÁRIO:" />
            <Input label="SENHA:" />
          </ContainerContentLogin>
        </ContainerLogin>
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
