import {
  ADD_ITEM,
  VOTE_ITEM,
  UPDATE_NEW_ITEM,
  CLEAR_NEW_ITEM,
  CALL_API,
  FETCH_ITEMS, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR,
  LOGIN, LOGIN_SUCCESS, LOGIN_ERROR,
  SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR, LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR
} from './actionTypes';

export const AddItem = (text, cardType) => {
  return { type: ADD_ITEM, text, cardType };
};

export const VoteItem = (id) => {
  return { type: VOTE_ITEM, id };
};

export const UpdateNewItem = (text, cardType) => {
  return { type: UPDATE_NEW_ITEM, text, cardType };
};

export const ClearNewItem = (cardType) => {
  return { type: CLEAR_NEW_ITEM, cardType };
};

export const FetchItems = () => {
  return {
  type: CALL_API,
  types: [FETCH_ITEMS, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR],
  endpoint: '/swot-item',
  };
};

export const Signup = (email, username, password) => {
  return {
    type: CALL_API,
    method: 'POST',
    data: { user: { email, username, password }},
    types: [SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR],
    endpoint: '/auth/signup',
  };
};

export const Login = (email, password) => {
  return {
    type: CALL_API,
    method: 'POST',
    data: { user: { email, password }},
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_ERROR],
    endpoint: '/auth/login',
  };
};

export const Logout = () => { return { type: LOGOUT, }; };

export const LogoutSuccess = () => { return { type: LOGOUT_SUCCESS, }; };

export const LogoutError = () => { return { type: LOGOUT_ERROR, }; };