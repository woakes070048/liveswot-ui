import { combineReducers } from 'redux';

import items from './items';
import newItem from './newItem';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  items,
  newItem,
  router: routerReducer,
});
