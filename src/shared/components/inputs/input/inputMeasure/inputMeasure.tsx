import { useEffect, useState } from 'react';

import { useFormatNumbers } from '../../../../hooks/useFormatNumbers';
import Input, { InputProps } from '../Input';

interface InputMeasureProps extends InputProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addonBefore?: string;
}

const DECIMAL_SIZE = 2;

const InputMeasure = ({ value, onChange, addonBefore = 'cm', ...props }: InputMeasureProps) => {
  const [currentValue, setCurrentValue] = useState<string>(`${value}`);
  const { formatInCurrency } = useFormatNumbers();

  useEffect(() => {
    if (!/\D/.test(String(value).replace(/\D/g, ''))) {
      setCurrentValue(formatInCurrency((value || 0).toFixed(2)));
    }
  }, [value]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueWithOutPoint = event.target.value.replace(/\D/g, '');
    const sizeValue = valueWithOutPoint.length - DECIMAL_SIZE;

    const newValue = [
      valueWithOutPoint.slice(0, sizeValue),
      '.',
      valueWithOutPoint.slice(sizeValue),
    ].join('');

    onChange({
      ...event,
      target: {
        ...event.target,
        value: newValue,
      },
    });
  };

  return (
    <Input addonBefore={addonBefore} value={currentValue} onChange={handleOnChange} {...props} />
  );
};

export default InputMeasure;
