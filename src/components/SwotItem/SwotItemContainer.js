import {connect} from 'react-redux';

import {getVotes} from "../../selectors/votes";

export default connect(
  (state, ownProps) => ({
    getVotes: getVotes,
    votes: (() => {
      const votes = getVotes(state, ownProps.swotItem.swotItemId);
      const
        ups = votes.filter((v) => v.voteType === 'up').length,
        downs = votes.filter((v) => v.voteType === 'down').length;
      return ups - downs;
    })(),
    ...ownProps,
  }),
  (dispatch, ownProps) => ({}),
);