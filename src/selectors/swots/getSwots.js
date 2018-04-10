import { initialState as initialSwotsState } from '../../reducers/swots';


export default (state = {swots: initialSwotsState}) => {
  return Object.keys(state.swots.byId).map((swotId) => ({
    ...state.swots.byId[swotId],
  }));
};