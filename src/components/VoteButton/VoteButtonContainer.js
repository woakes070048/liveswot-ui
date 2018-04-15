import { connect } from 'react-redux';

import {Vote} from '../../actions';
import {getUser} from '../../selectors/user';
import {getVotes} from '../../selectors/votes';


const mapStateToProps = (state, ownProps) => {
  const swotItemId = ownProps.swotItemId;
  const votes = getVotes(state, swotItemId);
  const user = getUser(state);

  return {
    userId: user.userId,
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
    onVoteItem(swotItemId, voteType, userId) {
      dispatch(Vote(swotItemId, voteType, userId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
