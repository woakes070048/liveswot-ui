import {LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_SUCCESS} from "../../actions/actionTypes";
import authUtils from "../../utils/auth";
import { push, replace } from 'react-router-redux';

export default (store) => (next) => (action) => {
  if (action.type === LOGIN_SUCCESS) {
    authUtils.saveToken(action.data.user.token);
    next(push('/'));
  }
  if (action.type === LOGOUT_SUCCESS || action.type === LOGOUT_ERROR) {
    authUtils.removeToken();
    next(replace('/login'));
  }
  return next(action);
};