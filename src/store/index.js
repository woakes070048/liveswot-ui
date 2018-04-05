import { createStore as _createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import api from '../middlewares/api';
import log from '../middlewares/log';
import history from '../middlewares/history';
import initApp from '../middlewares/initApp';

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
  history,
  log,
];

export default createStore(reducers, middlewares);
