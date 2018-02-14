import { connect } from 'react-redux';
import { AddItem } from '../../../../actions';

const mapStateToProps = (state, ownProps) => {
  return { ...state, ...ownProps };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (swotInputText, boardType) => {
      console.log(`dispatch(AddItem(${swotInputText}, ${boardType}))!`);
      dispatch(AddItem(swotInputText, boardType));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
