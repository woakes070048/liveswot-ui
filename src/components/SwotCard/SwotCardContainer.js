import {connect} from 'react-redux';

import {CreateSwotItem, UpdateNewItem, ClearNewItem} from '../../store/actions/index';
import {getSwotItems} from "../../selectors/swotItems";
import {getUser} from '../../selectors/user';


const mapStateToProps = (state, ownProps) => {
  const
    {cardType} = ownProps,
    swotId = parseInt(ownProps.match.params.swotId, 10),
    swotItems = getSwotItems(state, swotId, cardType),
    user = getUser(state);

  return {
    user,
    swotId,
    text: state.newItem[cardType],
    items: swotItems,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (swotId, text, cardType) => {
      dispatch(ClearNewItem(cardType));
      dispatch(CreateSwotItem(swotId, text, cardType));
    },
    onChange: (e) => {
      e.preventDefault();
      const text = e.target.value;
      dispatch(UpdateNewItem(text, ownProps.cardType));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
