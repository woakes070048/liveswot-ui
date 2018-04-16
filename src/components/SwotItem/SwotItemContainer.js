import {connect} from 'react-redux';

import {getVotes} from "../../selectors/votes";

export default connect(
  (state, ownProps) => ({
      getVotes: getVotes,
      ...ownProps,
  }),
  (dispatch, ownProps) => ({}),
);