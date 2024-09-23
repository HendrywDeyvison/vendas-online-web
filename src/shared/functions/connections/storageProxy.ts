export const setItemStorage = (key: string, value: string) => localStorage.setItem(key, value);

export const getItemStorage = (key: string) => localStorage.getItem(key);

export const removeItemStorage = (key: string) => localStorage.removeItem(key);
