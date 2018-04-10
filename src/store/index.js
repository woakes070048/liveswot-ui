import { createStore as _createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { push } from 'react-router-redux';

import reducers from '../reducers';
import api from '../middlewares/api';
import log from '../middlewares/log';
import history from '../middlewares/history';
import initApp from '../middlewares/initApp';
import {LOGIN_SUCCESS} from "../actions/actionTypes";

const createStore = (reducers, middlewares) => {
  return _createStore(
    reducers,
    applyMiddleware(...middlewares)
  );
};

const middlewares = [
  thunk,
  initApp,
  api,
  (store) => (next) => (action) => {
    if (action.type === LOGIN_SUCCESS) {
      console.log('LOGIN_SUCCESS => push(`/`)');
      store.dispatch(push('/'));
    }
    return next(action);
  },
  history,
  log,
];

export default createStore(reducers, middlewares);
