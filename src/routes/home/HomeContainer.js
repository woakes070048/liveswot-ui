import { connect } from 'react-redux';

import { getSwots } from '../../selectors/swots';


export default connect(
  (state, ownProps) => ({
    swots: getSwots(state),
    // swots: [],
    teams: [],
    userSwots: [],
    ...ownProps}),
  (dispatch, ownProps) => ({ ...ownProps}),
);