import { connect } from 'react-redux';

import {Vote} from '../../store/actions';
import {getVotes} from '../../store/selectors/votes';
import authUtils from '../../utils/auth';


const isActive = (state, swotItemId, userId, voteType) => {
  const votes = getVotes(state, swotItemId);
  return votes
    .filter((v) => (
      v.swotItemId === swotItemId
      && v.creatorId === userId
      && v.voteType === voteType
    ))
    .length > 0;
};

const mapStateToProps = (state, ownProps) => {
  const swotItemId = ownProps.swotItemId;
  const
    // votes = getVotes(state, swotItemId),
    user = authUtils.getUser(authUtils.getToken()),
    isUpActive = isActive(state, swotItemId, user.userId, 'up'),
    isDownActive = isActive(state, swotItemId, user.userId, 'down');

  return {
    isUpActive,
    isDownActive,
    userId: user.userId,
    ...ownProps,
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
