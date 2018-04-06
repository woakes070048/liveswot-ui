import { connect } from 'react-redux';
import { CreateSwotItem, UpdateNewItem, ClearNewItem } from '../../actions/index';


const mapStateToProps = (state, ownProps) => {
  const { cardType } = ownProps;
  const swotItems = Object.keys(state.swotItems.byId).map((swotItemId) => {
    return { ...state.swotItems.byId[swotItemId] };
  });
  return {
    text: state.newItem[cardType],
    items: swotItems.filter((item) => item.cardType === cardType),
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
