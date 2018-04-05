import { host as baseUrl} from '../../config/environment';
import authUtils from "../../utils/auth";


const defaultConfig = {
  timeout: 5000,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const handleSuccessAndError = (response) => {
  return new Promise((resolve, reject) => {
    response.json().then((data) => {
      const jsonResponse = {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        data
      };
      if (response.status >= 400) {
        return reject(jsonResponse);
      }
      return resolve(jsonResponse);
    });
  });
};

export default (endpoint, config) => {

  const url = `${baseUrl}${endpoint}`;
  config = Object.assign(defaultConfig, config);

  const token = authUtils.getToken();
  if (token) {
   config.headers['Authorization'] = `Bearer ${token}`;
  }

  if (config) {
    config.body = JSON.stringify(config.data);
    delete config.data;
  }

  return fetch(url, config)
    .then(handleSuccessAndError);
};
