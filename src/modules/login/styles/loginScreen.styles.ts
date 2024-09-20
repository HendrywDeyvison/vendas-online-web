import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const ContainerLoginScreen = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const TitleLogin = styled(Title)`
  color: #006397 !important;
`;

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  background-color: #d9d9d9;
  width: 100%;
  height: 100vh;
  max-width: 646px;
  padding: 22px;
`;

export const ContainerContentLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
