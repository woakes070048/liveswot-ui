import {LoadToken} from "../../actions";
import authUtils from "../../utils/auth";

const loadToken = (store) => (next) => (action) => {

  if (!store.getState().auth) {
    const token = authUtils.getToken();
    if (!!token) {
      next(LoadToken(token));
    }
  }

  next(action);
};

export default loadToken;
