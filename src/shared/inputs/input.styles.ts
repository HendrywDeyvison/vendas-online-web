import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

export const BoxInput = styled.div`
  width: 100%;
`;

export const LabelInput = styled(Text)`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  margin: 8px;
`;
