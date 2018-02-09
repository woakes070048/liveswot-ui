import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return { ...state, ...ownProps };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
