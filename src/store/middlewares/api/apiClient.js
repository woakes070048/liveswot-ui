import { host as baseUrl} from '../../../config/environment';
import authUtils from "../../../utils/auth";


const defaultConfig = {
  timeout: 5000,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const canHaveBody = (config) => {
  return (
    config && config.data
    && config.method
    && !(['GET', 'HEAD'].includes(config.method.toUpperCase()))
  );
};

const handleSuccessAndError = (response) => {
  return new Promise((resolve, reject) => {
    response.json().then((data) => {
      const jsonResponse = {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        data: data,
      };
      if (response.status >= 400) {
        return reject(jsonResponse);
      }
      return resolve(jsonResponse);
    });
  });
};

const saveToken = (response) => {
  if (
    !response.data || !response.data.data
    || !response.data.data.user || !response.data.data.user.token
  ) {
    return response;
  }

  const token = response.data.data.user.token;
  authUtils.saveToken(token);

  return response;
};

export default (endpoint, config) => {

  const url = `${baseUrl}${endpoint}`;
  const token = authUtils.getToken();
  config = Object.assign(defaultConfig, config);

  if (!!token) {
   config.headers['Authorization'] = `Bearer ${token}`;
  }

  delete config.body;
  if (canHaveBody(config)) {
    config.body = JSON.stringify(config.data);
    delete config.data;
    config = {...config};
  }

  return fetch(url, config)
    .then(handleSuccessAndError)
    .then(saveToken);
};
