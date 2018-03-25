import {
  LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOAD_TOKEN, LOGOUT_SUCCESS
} from '../actions/actionTypes';
import authUtils from '../utils/auth';

const token = (state = authUtils.getToken(), action) => {
  switch (action.type) {
    case LOGIN:
      console.log('logging in');
      break;
    case LOGIN_SUCCESS:
      console.log(`action.data.user.token => ${action.data.user.token}`);
      console.log(`authUtils.getToken() => ${authUtils.getToken()}`);
      state = action.data.user.token;
      break;
    case LOGIN_ERROR:
      console.log(LOGIN_ERROR);
      break;
    case LOAD_TOKEN:
      state = action.data.token;
      break;
    case LOGOUT_SUCCESS:
      state = '';
      console.log('reducer: token');
      console.log(action.type);
      authUtils.removeToken();
      break;
    default:
      break;
  }
  return state;
};

export default token;
