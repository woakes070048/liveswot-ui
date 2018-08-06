import jwtDecode from 'jwt-decode';


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

export const getUser = (token) => {
  // const decoded = jwtDecode(token);

  return {
    userId: 111,
    username: 'imranariffin',
    email: 'imranariffin@gmail.com',
    firstName: 'Imran',
    lastName: 'Ariffin',
  };
};

const authUtils = {
  removeToken,
  getToken,
  saveToken,
  getUser,
};

export default authUtils;