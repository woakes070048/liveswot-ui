import {
  FETCH_SWOT_ITEMS, FETCH_SWOT_ITEMS_SUCCESS, FETCH_SWOT_ITEMS_ERROR,
  CREATE_SWOT_ITEM_SUCCESS, VOTE_SUCCESS
} from '../../actions/actionTypes';

const initialState = {
  byId: {
    0: {
      swotId: 123,
      cardType: 'strength',
      swotItemId: 0,
      text: 'Text 0'
    },
    1: {
      swotId: 123,
      cardType: 'strength',
      swotItemId: 1,
      text: 'Text 1'
    }
  },
  errors: [],
  isLoading: false,
  ids: [0, 1],
};

const swotItems = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default swotItems;