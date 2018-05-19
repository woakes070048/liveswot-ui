import * as types from '../../actions/actionTypes';

export const initState = {
  byId: {},
  isLoading: false,
  errors: [],
};

const members = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_MEMBERS: {
      return {
        byId: {...state.byId},
        errors: [...state.errors],
        isLoading: true,
      };
    }
    case types.FETCH_MEMBERS_SUCCESS: {
      return {
        byId: action.data.reduce((membersById, member) => {
          membersById[member.memberId] = {...member};
          return membersById;
        }, {}),
        errors: [],
        isLoading: false,
      };
    }
    case types.FETCH_MEMBERS_ERROR: {
      return {
        byId: {...state.byId},
        errors: [...action.errors],
        isLoading: state.isLoading,
      };
    }
    default:
      return state;
  }
};

export default members;