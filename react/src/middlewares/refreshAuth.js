const refreshAuth = (store) => (next) => (action) => {
  const storage = window.localStorage;
  next(action);
};

export default refreshAuth;
