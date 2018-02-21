import { combineReducers } from 'redux';
import items from './items';
import newItem from './newItem';

export default combineReducers({
  items,
  newItem,
});
