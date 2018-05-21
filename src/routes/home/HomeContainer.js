import {connect} from 'react-redux';

import getSwots from '../../selectors/swots/getSwots';
import {FetchMembers, FetchSwots} from "../../actions";


export default connect(
  (state, ownProps) => ({
    swots: getSwots(state),
    userSwots: [],
    ...ownProps}),
  (dispatch, ownProps) => ({
    onMountFetchSwots: () => dispatch(FetchSwots()),
    ...ownProps,
  }),
);