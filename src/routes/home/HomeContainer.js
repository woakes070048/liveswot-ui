import {connect} from 'react-redux';

import getSwots from '../../selectors/swots/getSwots';
import {FetchSwots} from "../../actions";


export default connect(
  (state, ownProps) => ({
    swots: getSwots(state),
    isLoading: state.swots.isLoading,
    userSwots: [],
    ...ownProps}),
  (dispatch, ownProps) => ({
    onMountFetchSwots: () => dispatch(FetchSwots()),
    ...ownProps,
  }),
);