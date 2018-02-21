
import { ADD_ITEM, VOTE_ITEM } from '../actions/actionTypes';

const items = (state = [], action) => {
  let newState = state;
  switch (action.type) {

    case ADD_ITEM:
      const { text, cardType } = action;
      const newId = state.length;
      newState = [ ...state, { id: newId, text, cardType, vote: 0 } ];
      break;

    case VOTE_ITEM:
      const { id: voteId } = action;
      newState = state.map((item) => {
        return item.id === voteId
          ? { ...item, vote: item.vote + 1 }
          : { ...item };
      });
      break;

    default:
      break;
  }

  return newState.sort((a, b) => {
    return b.vote - a.vote;
  });
};

export default items;
