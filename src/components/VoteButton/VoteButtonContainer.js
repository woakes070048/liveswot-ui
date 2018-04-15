import { connect } from 'react-redux';

import {Vote} from "../../actions";
import {getVotes} from "../../selectors/votes";
import {getUser} from "../../selectors/user";


const mapStateToProps = (state, ownProps) => {
  const votes = getVotes(state);
  const user = getUser(state);

  return {
    isActive: votes
      .filter((vote) => (
        vote.creatorId === user.userId &&
        vote.swotItemId === ownProps.swotItemId
      ))
      .length > 0
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onVoteItem(swotItemId, voteType) {
      dispatch(Vote(swotItemId, voteType));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
