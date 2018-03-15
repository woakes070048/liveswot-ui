import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import {Logout, LogoutSuccess} from "../../actions";
import {authUtils} from "../../utils";

const mapStateToProps = (state) => {
  const { username, email } = state;
  const profileImg = 'https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-9/25507801_10214600576038909_8129308682006032833_n.jpg?oh=f6a69fa4bb09fa9a11b1e87c176dc732&oe=5B382481';
  return { username, email, profileImg };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout() {
      dispatch(Logout());
      authUtils.removeToken();
      dispatch(push('/login'));
      dispatch(LogoutSuccess());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
