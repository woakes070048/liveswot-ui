import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const ProtectedRoute = (_props) => {
  const {
    isAuthorized,
    component: Component,
    ...props
  } = _props;

  return (
    isAuthorized()
      ? <Component {...props}/>
      : (
        <Redirect to={{
          pathname: '/login',
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
          !!state.token
          // state.user !== {}
          // && state.user.username !== ''
          // && state.user.email !== ''
          // && !state.user.isLoading
        );
      }
    };
  }
)(ProtectedRoute);