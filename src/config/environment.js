let _host;

switch (process.env.NODE_ENV) {
  case 'production':
    _host = 'https://liveswot-api.herokuapp.com/api';
    break;
  case 'development':
    _host = 'http://localhost:8080/api';
    break;
  default:
    _host = 'https://liveswot-api.herokuapp.com/api';
}

export const host = _host;
