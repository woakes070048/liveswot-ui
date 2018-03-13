import {
  LOGIN, LOGIN_SUCCESS, LOGIN_ERROR
} from '../actions/actionTypes';
import authUtils from '../utils/auth';

const token = (state = '', action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const token = action.response.data.user.token;
      console.log(token);
      authUtils.saveToken(token);
      state = token;
      break;
    default:
  }
  return state;
};

export default token;
