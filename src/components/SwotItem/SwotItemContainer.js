import {connect} from 'react-redux';

import {getVotes} from "../../selectors/votes";

export default connect(
  (state, ownProps) => ({
    state: state,
    getVotes: getVotes,
  }),
  (dispatch, ownProps) => ({}),
);