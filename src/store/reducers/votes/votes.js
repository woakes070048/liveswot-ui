import {VOTE, FETCH_VOTES_SUCCESS, VOTE_SUCCESS} from "../../store/actions/actionTypes";

const initialState = {
  byId: {},
  errors: [],
  isLoading: false,
};

const votes = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_VOTES_SUCCESS: {
      return {
        byId: action.data.reduce((votes, vote) => {
          votes[vote.voteId] = {...vote};
          return votes;
        }, {}),
        errors: [],
        isLoading: false,
      }
    }
    case VOTE: {
      const newState = {
        byId: {...state.byId},
        errors: [...state.errors],
        isLoading: true,
      };

      Object.keys(newState.byId).forEach((voteId) => {
        const
          swotItemId = action.data.swotItemId,
          vote = newState.byId[voteId],
          userId = action.data.userId;

        if (swotItemId === vote.swotItemId && vote.creatorId === userId) {
          delete newState.byId[voteId];
        }
      });

      return newState;
    }
    case VOTE_SUCCESS: {
      const newState = {errors: [], isLoading: false};
      if (!action.data.swotItemId) {
        newState.byId = {...state.byId};
      } else {
        newState.byId = {
          ...state.byId,
          [action.data.voteId]: {...action.data},
        };
      }
      return newState;
    }
    default:
      return state;
  }
};

export default votes;