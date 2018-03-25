import { connect } from 'react-redux';
import { Signup } from '../../actions';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: (email, username, password) => {
    dispatch(Signup(email, username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
