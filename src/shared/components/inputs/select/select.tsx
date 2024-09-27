import { Select as SelectAntd, SelectProps as SelectPropsAntd } from 'antd';

import { BoxSelect, LabelSelect } from './select.style';

interface SelectProps extends SelectPropsAntd {
  label?: string;
  margin?: string;
}

const Select = ({ label, margin, ...props }: SelectProps) => {
  return (
    <BoxSelect style={{ margin }}>
      {label && <LabelSelect strong>{label}</LabelSelect>}
      <SelectAntd style={{ width: '100%' }} {...props} />
    </BoxSelect>
  );
};

export default Select;
