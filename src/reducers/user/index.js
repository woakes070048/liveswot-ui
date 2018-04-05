import {
  LOGIN, LOGIN_SUCCESS, LOGIN_ERROR
} from "../../actions/actionTypes";

const initialState = {
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  isLoading: false,
  errors: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...initialState,
        isLoading: true,
        errors: [],
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...action.data,
        isLoading: false,
        errors: [],
      };
    }
    case LOGIN_ERROR: {
      return {
        ...initialState,
        errors: [ ...action.errors ],
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default user;