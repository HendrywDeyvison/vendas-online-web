import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';

import { BoxInput, LabelInput } from './input.styles';

export interface InputProps extends InputPropsAntd {
  label?: string;
  margin?: string;
}

const Input = ({ label, margin, ...props }: InputProps) => {
  return (
    <BoxInput style={{ margin }}>
      <LabelInput strong>{label}</LabelInput>
      <InputAntd {...props} />
    </BoxInput>
  );
};

export default Input;
