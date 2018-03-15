import authUtils from "../../utils/auth";

const dumpToken = (store) => (next) => (action) => {
  const { token } = store.getState();
  authUtils.saveToken(token);
  next(action);
};

export default dumpToken;
