import {connect} from 'react-redux';

import {CreateSwotItem, UpdateNewItem, ClearNewItem} from '../../actions/index';
import {getSwotItems} from "../../selectors/swotItems";
import {getVotes} from "../../selectors/votes";
import {getUser} from "../../selectors/user";
import {getVoteValues} from "../../selectors/votes/getVotes";


const mapStateToProps = (state, ownProps) => {
  const { cardType } = ownProps,
    swotId = parseInt(ownProps.match.params.swotId),
    swotItems = getSwotItems(state, swotId, cardType),
    votes = getVotes(state),
    user = getUser(state),
    voteValues = getVoteValues(state);

  console.log('%%%%%%%%%%%%%%%%%%%');
  console.log(`cardType: ${cardType}`);
  console.log(`!!cardType: ${!!cardType}`);
  console.log(`swotItems:`);
  console.log(swotItems);
  console.log('%%%%%%%%%%%%%%%%%%%');

  return {
    user,
    swotId,
    text: state.newItem[cardType],
    items: swotItems,
    votes: votes,
    voteValues,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (swotId, text, cardType) => {
      dispatch(ClearNewItem(cardType));
      dispatch(CreateSwotItem(swotId, text, cardType));
    },
    onChange: (text) => {
      dispatch(UpdateNewItem(text, ownProps.cardType));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
