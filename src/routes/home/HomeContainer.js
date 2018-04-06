import { connect } from 'react-redux';


export default connect(
  (state, ownProps) => ({ ...state, ...ownProps}),
  (dispatch, ownProps) => ({ ...ownProps}),
);