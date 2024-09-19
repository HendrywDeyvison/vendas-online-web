import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';

import { BoxInput, LabelInput } from './input.styles';

interface InputProps extends InputPropsAntd {
  label?: string;
  margin?: string;
}

const Input = ({ label, margin, ...props }: InputProps) => {
  return (
    <BoxInput style={{ margin }}>
      <LabelInput>{label}</LabelInput>
      <InputAntd {...props} />
    </BoxInput>
  );
};

export default Input;
