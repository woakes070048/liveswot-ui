import { connect } from 'react-redux';
import { AddItem, UpdateNewItem, ClearNewItem } from '../../../../actions';

const mapStateToProps = (state, ownProps) => {
  const { cardType } = ownProps;
  return {
    text: state.newItem[cardType],
    items: state.items.filter((item) => item.cardType === cardType),
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (text, cardType) => {
      dispatch(ClearNewItem(cardType));
      dispatch(AddItem(text, cardType));
    },
    onChange: (text) => {
      dispatch(UpdateNewItem(text, ownProps.cardType));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
