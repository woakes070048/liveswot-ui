import {
  FETCH_SWOT_ITEMS, FETCH_SWOT_ITEMS_SUCCESS, FETCH_SWOT_ITEMS_ERROR, CREATE_SWOT_ITEM_SUCCESS
} from "../../actions/actionTypes";

const initialState = {
  byId: {},
  errors: [],
  isLoading: false,
};

const swotItems = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SWOT_ITEMS: {
      return {
        byId: {...state.byId},
        errors: [...state.errors],
        isLoading: true,
      };
    }
    case FETCH_SWOT_ITEMS_SUCCESS: {
      return {
        byId: action.data.reduce((swotItems, swotItem) => {
          swotItems[swotItem.swotItemId] = {...swotItem};
          return swotItems;
          }, {}),
        errors: [],
        isLoading: false,
      };
    }
    case FETCH_SWOT_ITEMS_ERROR: {
      return {
        byId: {...state.byId},
        errors: [...action.errors],
        isLoading: false,
      };
    }
    case CREATE_SWOT_ITEM_SUCCESS: {
      return {
        byId: {
          ...state.byId,
          [action.data.swotItemId]: action.data
        },
        errors: [...state.errors],
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default swotItems;