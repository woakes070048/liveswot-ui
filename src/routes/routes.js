import Login from "../components/Login";
import Signup from "../components/Signup";
import App from "../components/App";
import AuthorizedOnlyHOC from "../components/AuthorizedOnly/AuthorizedOnlyHOC";
import store from '../store';

export const withAuthorization = [{
  path: '/',
  component: AuthorizedOnlyHOC(store)(App),
  exact: true,
}];

export const withoutAuthorization = [{
  path: '/login',
  component: Login,
}, {
  path: '/signup',
  component: Signup,
}];



export default []
  .concat(withAuthorization)
  .concat(withoutAuthorization)
  .map((path) => {
    return { ...path, exact: path.exact ? true : false };
  });