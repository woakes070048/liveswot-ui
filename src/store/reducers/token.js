import {
  LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOAD_TOKEN, LOGOUT_SUCCESS
} from '../store/actions/actionTypes';
import authUtils from '../utils/auth';

const token = (state = authUtils.getToken(), action) => {
  switch (action.type) {
    case LOGIN:
      break;
    case LOGIN_SUCCESS:
      state = action.data.user.token;
      break;
    case LOGIN_ERROR:
      console.error(LOGIN_ERROR);
      break;
    case LOAD_TOKEN:
      state = action.data.token;
      break;
    case LOGOUT_SUCCESS:
      state = '';
      authUtils.removeToken();
      break;
    default:
      break;
  }
  return state;
};

export default token;
