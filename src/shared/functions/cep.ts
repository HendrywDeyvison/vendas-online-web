export const insertMaskInCep = (cep: string) => {
  return cep.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
};
