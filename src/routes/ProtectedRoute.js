import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';


const ProtectedRoute = (_props) => {
  const {
    isAuthenticated,
    component: Component,
    ...props
  } = _props;

  return (
    isAuthenticated
      ? <Component {...props}/>
      : (
        <Redirect to={{
          path: '/login',
          state: { from: props.location },
      }}/>)
  );
};

export default connect(
  (state, ownProps) => {
    return {
      component: ownProps.component,
      isAuthorized() {
        return (
          state.user !== {}
          && state.user.username !== ''
          && state.user.email !== ''
          && !state.user.isLoading
        );
      }
    };
  }
)(ProtectedRoute);