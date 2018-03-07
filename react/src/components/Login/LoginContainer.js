import { connect } from 'react-redux';
import { Login } from '../../actions';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (email, password) => {
      console.log('email: ' + email);
      console.log('password: ' + password);
      dispatch(Login(email, password));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
);
