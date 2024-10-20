export const insertMaskInPhone = (phone: string) => {
  const phoneNoMask = phone.replace(/\D/g, '');
  const { length } = phoneNoMask;

  if (length <= 11) {
    return length == 11
      ? phone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')
      : phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }

  return phone;
};
