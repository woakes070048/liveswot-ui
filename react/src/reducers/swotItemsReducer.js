
import { ADD_ITEM } from '../actions/actionTypes';

const swotItemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      const { text, boardType } = action;
      const id = `${state.length}`;
      return [ { id, text, boardType }, ...state ];
    default:
      return state;
  }
};

export default swotItemsReducer;
