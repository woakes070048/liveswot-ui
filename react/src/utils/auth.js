export const AUTH_TOKEN = 'token';
const storage = window.localStorage;

export const getToken = () => {
  return storage.getItem(AUTH_TOKEN) || '';
};

export const saveToken = (token) => {
  storage.setItem(AUTH_TOKEN, token);
};

export const removeToken = () => {
  storage.removeItem(AUTH_TOKEN);
};

const authUtils = {
  removeToken,
  getToken,
  saveToken,
};

export default authUtils;