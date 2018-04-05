import {FETCH_SWOTS, FETCH_SWOTS_ERROR, FETCH_SWOTS_SUCCESS} from "../../actions/actionTypes";

const initialState = {
  byId: {},
  errors: [],
  isLoading: false,
};

const swots = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SWOTS: {
      return {
        byId: { ...state.byId },
        errors: [ ...state.errors ],
        isLoading: true,
      };
    }
    case FETCH_SWOTS_SUCCESS: {
      return {
        byId: action.data.byId.reduce((swots, swot) => {
          swots[swot.swotId] = { ...swot };
          return swots;
        }, {}),
        errors: [],
        isLoading: false,
      };
    }
    case FETCH_SWOTS_ERROR: {
      return {
        byId: { ...state.byId },
        errors: [ ...action.errors ],
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default swots;