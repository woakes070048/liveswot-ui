import { createStore as _createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import api from '../middlewares/api';
import history from '../middlewares/history';
import authorize from '../middlewares/authorize';
import authenticate from '../middlewares/authenticate';
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
  // authorize,
  authenticate,
  history,
];

export default createStore(reducers, middlewares);
