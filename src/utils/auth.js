export const AUTH_TOKEN = 'token';
const storage = window.localStorage;

export const getToken = () => {
  const token = storage.getItem(AUTH_TOKEN);
  if (typeof token === 'undefined' || token === 'null') {
    return null;
  }
  return token;
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