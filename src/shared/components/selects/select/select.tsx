import { Select as SelectAntd, SelectProps as SelectPropsAntd } from 'antd';

import { BoxSelect, LabelSelect } from './select.style';

interface SelectProps extends SelectPropsAntd {
  label?: string;
  margin?: string;
  width?: string;
}

const Select = ({ label, margin, width, ...props }: SelectProps) => {
  return (
    <BoxSelect style={{ margin }}>
      <LabelSelect strong>{label}</LabelSelect>
      <SelectAntd style={{ width }} {...props} />
    </BoxSelect>
  );
};

export default Select;
