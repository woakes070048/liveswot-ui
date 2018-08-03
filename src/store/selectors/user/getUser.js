import { initialState as initialUserState } from '../../reducers/user';

export default (state = {user: initialUserState}) => {
  return {
    ...state.user,
    errors: [ ...state.user.errors ],
  };
};