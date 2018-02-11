
import { ADD_ITEM } from '../actions/actionTypes';

const items = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      const { text, boardType } = action;
      const id = `${state.length}`;
      return [ ...state, { id, text, boardType } ];
    default:
      return state;
  }
};

export default items;
