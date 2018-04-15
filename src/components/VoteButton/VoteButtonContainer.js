import { connect } from 'react-redux';

import {Vote} from '../../actions';
import {getUser} from '../../selectors/user';
import {getVotes} from '../../selectors/votes';


const mapStateToProps = (state, ownProps) => {
  const
    swotItemId = ownProps.swotItemId,
    votes = getVotes(state, swotItemId),
    user = getUser(state),
    isUpActive = true,
    isDownActive = false;

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
