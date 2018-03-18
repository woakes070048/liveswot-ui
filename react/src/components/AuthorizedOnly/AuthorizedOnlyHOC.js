import { replace } from 'react-router-redux';

import Login from '../Login/index';

const AuthorizedOnlyHOC = (store) => (component) => {
  const { token } = store.getState();

  if (!!token) {
    return component;
  }

  const errorMsg = 'Error: Authorization required';
  console.error(errorMsg);

  store.dispatch(replace('/login'));

  return Login;
};

export default AuthorizedOnlyHOC;
