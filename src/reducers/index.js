import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import items from './items';
import newItem from './newItem';
import token from './token';
import user from './user';

export default combineReducers({
  items,
  newItem,
  token,
  user,
  router: routerReducer,
});
