import {
  ADD_ITEM,
  VOTE_ITEM,
  FETCH_SWOT_ITEMS, FETCH_SWOT_ITEMS_SUCCESS, FETCH_SWOT_ITEMS_ERROR, ADD_ITEM_SUCCESS
} from '../actions/actionTypes';

const items = (state = [], action) => {
  let newState = state;
  switch (action.type) {

    case FETCH_SWOT_ITEMS:
      break;
    case FETCH_SWOT_ITEMS_SUCCESS:
      newState = action.data.map((d) => {
        return {
          id: d.id,
          text: d.text,
          cardType: d.cardType,
        };
      });
      break;
    case FETCH_SWOT_ITEMS_ERROR:
      newState = [];
      break;

    case ADD_ITEM_SUCCESS:
      console.log('reducers.items.ADD_ITEM_SUCCESS');
      console.log('action:');
      console.log(action);
      newState = [ ...state, action.data ];
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
