import { connect } from 'react-redux';


export default connect(
  (state, ownProps) => ({
    swots: [],
    teams: [],
    userSwots: [],
    ...ownProps}),
  (dispatch, ownProps) => ({ ...ownProps}),
);