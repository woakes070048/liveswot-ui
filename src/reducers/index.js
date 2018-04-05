import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import swots from './swots';
import swotItems from './swotItems';
import votes from './votes';
import newItem from './newItem';
import token from './token';
import user from './user/index';

export default combineReducers({
  swots,
  swotItems,
  votes,
  user,
  newItem,
  token,
  router: routerReducer,
});
