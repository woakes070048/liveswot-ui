import {INIT_APP} from "../../actions/actionTypes";

export default ({ authUtils, LoadToken }) => (store) => (next) => (action) => {
  if (action.type === INIT_APP) {
    return next(LoadToken(authUtils.getToken()));
  }
  return next(action);
};