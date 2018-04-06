import { connect } from 'react-redux';
import React from 'react';

import Login from './login';
import Signup from './signup';
import Home from './home';
import Swot from './swot';
import ProtectedRoute from "./ProtectedRoute";


export const protectedRoutes = [{
  path: '/',
  component: Home,
  exact: true,
}, {
  path: `/swots/:swotId([0-9]+)/`,
  component: Swot,
  exact: true,
}, {
  path: '/swots',
  component: AuthorizedOnlyHOC(store)(Swot),
}];

export const unprotectedRoutes = [{
  path: '/login/',
  component: Login,
  exact: true,
}, {
  path: '/signup/',
  component: Signup,
  exact: true,
}];

export const errorRoutes = [{
  path: '',
  component: connect((state) => (state))((props) => (
    <div>404</div>
  ))
}];

export default []
  .concat(protectedRoutes)
  .map((protectedPath) => ({
    ...protectedPath,
    isProtected: true,
  }))
  .concat(unprotectedRoutes)
  .concat(errorRoutes)
  .map((path) => {
    return {
      ...path,
      exact: path.exact ? true : false,
      isProtected: path.isProtected ? true : false,
    };
  });