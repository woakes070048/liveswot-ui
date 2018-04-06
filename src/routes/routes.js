import { connect } from 'react-redux';
import React from 'react';
import { Route } from 'react-router';

import Login from './login';
import Signup from './signup';
import Home from './home';
import Swot from './swot';
import ProtectedRoute from "./ProtectedRoute";
import Body from "../components/Body/Body";


const protectedPaths = [{
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

const unprotectedPaths = [{
  path: '/login/',
  component: Login,
  exact: true,
}, {
  path: '/signup/',
  component: Signup,
  exact: true,
}];

const errorPaths = [{
  path: '',
  component: connect((state) => (state))((props) => (
    <div>404</div>
  ))
}];

const mapProtectedPaths = (protectedPath) => ({
  ...protectedPath,
  isProtected: true,
});

export const mapPathsToRoutes = (_path, i) => {

  const {
    component,
    path,
    exact = false,
    isProtected = false
  } = _path;

  return isProtected
    ? (
      <ProtectedRoute
        key={i}
        path={path}
        component={Body(component)}
        exact={exact}
      />
    ) : (
      <Route
        key={i}
        path={path}
        component={Body(component)}
        exact={exact}
      />
    );
};

export default []
  .concat(protectedPaths)
  .map(mapProtectedPaths)
  .concat(unprotectedPaths)
  .concat(errorPaths);