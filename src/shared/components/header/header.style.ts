import { LoginOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const ContainerHeader = styled.header`
  height: 72px;
  width: calc(100% - 250px);
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 32px;

  background-color: white;

  -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
`;

export const LogoExit = styled(LoginOutlined)`
  font-size: 25px;
`;
