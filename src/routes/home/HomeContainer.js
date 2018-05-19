import {connect} from 'react-redux';

import getSwots from '../../selectors/swots/getSwots';


export default connect(
  (state, ownProps) => ({
    swots: getSwots(state),
    teams: [],
    userSwots: [],
    ...ownProps}),
  (dispatch, ownProps) => ({ ...ownProps}),
);