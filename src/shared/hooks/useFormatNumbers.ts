export const useFormatNumbers = () => {
  const formatInCurrency = (
    value: number | string,
    decimalSize = 2,
    local = 'pt-BR',
    currency?: string,
  ) => {
    value = Number(value);

    const options: Intl.NumberFormatOptions = {
      minimumFractionDigits: decimalSize,
      maximumFractionDigits: decimalSize,
    };

    if (currency) {
      options.style = 'currency';
      options.currency = currency;
    }

    return value.toLocaleString(local, options);
  };

  return {
    formatInCurrency,
  };
};
