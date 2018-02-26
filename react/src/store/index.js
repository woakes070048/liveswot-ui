import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import reducers from '../reducers';
import api from '../middlewares/api';
import { history } from '../middlewares/history';

const middlewares = [ thunk ];

middlewares.push(api);
middlewares.push(routerMiddleware(history));

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);

export default store;
