let _host;

switch (process.env.NODE_ENV) {
  case 'production':
    _host = 'http://liveswot-api.com/api';
    break;
  case 'development':
    _host = 'http://localhost:8080/api';
    break;
  default:
    _host = 'http://localhost:8080/api';
}

export const host = _host;
