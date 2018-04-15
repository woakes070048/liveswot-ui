import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router';

import { authUtils } from '../utils';


const ProtectedRoute = (props) => {
  const { isAuthorized } = props;
  return (
    isAuthorized()
      ? <Route {...props}/>
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
      ...state,
      component: ownProps.component,
      isAuthorized() {
        return !!authUtils.getToken();
      }
    };
  }
)(ProtectedRoute);