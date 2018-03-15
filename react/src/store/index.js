import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import reducers from '../reducers';
import api from '../middlewares/api/api';
import { history } from '../middlewares/history/history';
import loadToken from '../middlewares/loadToken/loadToken';
import dumpToken from "../middlewares/dumpToken/dumpToken";

const middlewares = [ thunk ];

middlewares.push(loadToken);
middlewares.push(api);
middlewares.push(routerMiddleware(history));
middlewares.push(dumpToken);

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);

export default store;
