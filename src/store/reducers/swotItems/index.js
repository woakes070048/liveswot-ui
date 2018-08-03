import {
  FETCH_SWOT_ITEMS, FETCH_SWOT_ITEMS_SUCCESS, FETCH_SWOT_ITEMS_ERROR, CREATE_SWOT_ITEM_SUCCESS, VOTE_SUCCESS
} from "../../store/actions/actionTypes";

const initialState = {
  byId: {},
  errors: [],
  isLoading: false,
  ids: [],
};

const swotItems = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SWOT_ITEMS: {
      return {
        byId: {...state.byId},
        errors: [...state.errors],
        isLoading: true,
        ids: [...state.ids],
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
        ids: action.data
          .sort((a, b) => a.score < b.score)
          .map((swotItem) => swotItem.swotItemId)
      };
    }
    case FETCH_SWOT_ITEMS_ERROR: {
      return {
        byId: {...state.byId},
        errors: [...action.errors],
        isLoading: false,
        ids: [...state.ids],
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
        ids: [action.data.swotItemId, ...state.ids]
      };
    }
    case VOTE_SUCCESS: {

      const {swotItemId, swotItemScore} = action.data;
      const byId = {
        ...state.byId,
        [swotItemId]: {...state.byId[swotItemId], score: swotItemScore}
      };

      return {
        byId,
        errors: [],
        isLoading: false,
        ids: state.ids
          .map(swotItemId => byId[swotItemId])
          .sort((a, b) => a.score < b.score)
          .map(swotItem => swotItem.swotItemId)
      };
    }
    default: {
      return state;
    }
  }
};

export default swotItems;