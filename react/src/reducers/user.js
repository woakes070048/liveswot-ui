import {LOGIN_SUCCESS} from "../actions/actionTypes";

const user = (state = { username: '', email: ''}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { username, email } = action;
      state = { username, email };
      break;
  }
  return state;
};

export default user;