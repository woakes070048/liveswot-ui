import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import reducers from '../reducers';
import api from '../middlewares/api/api';
import { history } from '../middlewares/history/history';
import refreshAuth from '../middlewares/refreshAuth/refreshAuth';

const middlewares = [ thunk ];

middlewares.push(api);
middlewares.push(routerMiddleware(history));
middlewares.push(refreshAuth);

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);

export default store;
