
import { ADD_ITEM, VOTE_ITEM } from '../actions/actionTypes';

const items = (state = [], action) => {
  switch (action.type) {

    case ADD_ITEM:
      const { text, boardType } = action;
      const newId = state.length;
      return [ ...state, { id: newId, text, boardType, vote: 0 } ];

    case VOTE_ITEM:
      const { id: voteId } = action;
      const newState = state.map((item) => {
        return item.id === voteId
          ? { ...item, vote: item.vote + 1 }
          : { ...item };
      });

      newState.sort((a, b) => {
        return b.vote - a.vote;
      });

      return newState;

    default:
      return state;
  }
};

export default items;
