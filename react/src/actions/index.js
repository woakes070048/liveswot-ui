import {
  ADD_ITEM,
  VOTE_ITEM,
  UPDATE_NEW_ITEM,
  CLEAR_NEW_ITEM,
  CALL_API,
  FETCH_ITEMS, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR,
  LOGIN, LOGIN_SUCCESS, LOGIN_ERROR,
  SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR, LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR, LOAD_TOKEN
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
    endpoint: '/auth/signup',
    types: [SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR],
    data: { user: { email, username, password }},
  };
};

export const Login = (email, password) => {
  return {
    type: CALL_API,
    method: 'POST',
    endpoint: '/auth/login',
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_ERROR],
    data: { user: { email, password }},
  };
};

export const Logout = () => { return { type: LOGOUT, }; };

export const LogoutSuccess = (token) => {
  return { type: LOGOUT_SUCCESS, data: {token }};
};

export const LogoutError = () => { return { type: LOGOUT_ERROR, }; };

export const LoadToken = (token) => {
  return { type: LOAD_TOKEN, data: {token }};
};