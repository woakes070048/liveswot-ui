import {CREATE_SWOT_SUCCESS, FETCH_SWOTS, FETCH_SWOTS_ERROR, FETCH_SWOTS_SUCCESS} from '../../actions/actionTypes';

export const initialState = {
  byId: {
    123: {
      swotId: 123,
      title: 'Title 123',
      description: 'Description 123',
      creatorId: 111,
      createdAt: '2019:09:12'
    },
    456: {
      swotId: 456,
      title: 'Title 456',
      description: 'Description 456',
      creatorId: 222,
    },
    789: {
      swotId: 789,
      title: 'Title 789',
      description: 'Description 789',
      creatorId: 111,
    }
  },
  errors: [],
  isLoading: false,
};

const swots = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default swots;