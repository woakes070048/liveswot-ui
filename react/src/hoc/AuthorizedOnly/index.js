import Login from '../../components/Login';
import authUtils from "../../utils/auth";

const AuthorizedOnly = (store) => (component) => {
  const { token } = store.getState();
  if (!!token) {
    return component;
  }
  const errorMsg = 'Error: Authorization required';
  console.error(errorMsg);
  return Login;
}

export default AuthorizedOnly;
