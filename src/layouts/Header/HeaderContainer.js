import { connect } from 'react-redux';

import {Logout, LogoutSuccess} from '../../store/actions/index';
import {authUtils} from '../../utils/index';

const mapStateToProps = (state) => {
  const { username, email } = state.user;
  const profileImg = 'https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-9/25507801_10214600576038909_8129308682006032833_n.jpg?oh=f6a69fa4bb09fa9a11b1e87c176dc732&oe=5B382481';

  return {
    isLoggedIn: !!authUtils.getToken(),
    username,
    email,
    profileImg
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout() {
      dispatch(Logout());
      dispatch(LogoutSuccess());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
