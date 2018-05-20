import { connect } from 'react-redux';

import { Login } from '../../actions/index';


const mapStateToProps = (state) => {
  const {user} = state;
  return {
    user: user,
    disabled: user.isLoading ? 'disabled' : '',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => {
      dispatch(Login(email, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
