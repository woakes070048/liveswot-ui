import Login from '../../components/Login';
import authUtils from "../../utils/auth";

const AuthorizedOnly = () => (component) => {
  if (authUtils.getToken()) {
    return component;
  }
  const errorMsg = 'Error: Authorization required';
  console.log(errorMsg);
  return Login;
}

export default AuthorizedOnly;
