export const convertNumberToMoney = (value: number) =>
  value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
