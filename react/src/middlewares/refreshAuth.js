const refreshAuth = (store) => (next) => (action) => {
  const storage = window.localStorage;

  if (!store.getState('auth')) {
    store.setState('auth', storage.getItem('auth'));
  }
  next(action);
};

export default refreshAuth;
