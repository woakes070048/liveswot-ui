import reducers from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import api from '../middlewares/api';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];

middlewares.push(api);

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);

export default store;
