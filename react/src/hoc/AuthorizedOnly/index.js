import Login from '../../components/Login';

const AuthorizedOnly = () => (component) => {
  const localStorage = window.localStorage;
  if (localStorage.getItem('auth')) {
    return component;
  }
  const errorMsg = 'Error: Authorization required';
  console.log(errorMsg);
  return Login;
}

export default AuthorizedOnly;
